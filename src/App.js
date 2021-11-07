import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
// 共用元件
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/Navbar/Navbar'
import MobileNavBar from './components/MobileNavBar'
import BottomNavBar from './components/BottomNavBar'
import Footer from './components/Footer'

// 頁面元件
// 柏兪 所有商品頁面
import ProductsAllPage from './pages/Ben/ProductsAllPage'

//品喬---------------------------------------------------------------
import IconSearch_p1 from './pages/Chiao/IconSearch_p1/IconSearch_p1'
import IconSearch_p2 from './pages/Chiao/IconSearch_p2/IconSearch_p2'
import HospitalPage from './pages/Chiao/HospitalPage/HospitalPage'
//品喬---------------------------------------------------------------

//羿伶頁面
import PortiaAllPage from './pages/Yiling/PortiaAllPage/PortiaAllPage'

//梓庭頁面
import ZiAllPage from './pages/zi'

//會員中心
import MemberCenter from './pages/MemberCenter'

// 相宸-------------------------------------------------------
import StanleyAllPage from './pages/Stanley/App'

// 後台頁面
import BackStage from './pages/BackStage'

import './App.css'

function App() {
  // 是否為登入狀態
  const [isAuth, setIsAuth] = useState(false)

  // navbar 商品類別欄顏色切換
  const [controlCate, setControlCate] = useState('')
  const [controlSmallCate, setControlSmallCate] = useState('')
  const [controlSmallBody, setControlSmallBody] = useState('')

  //給梓庭抓最近門市資料
  const [closeStore, setCloseStore] = useState({})

  // 後台商品編輯sid
  const [editSid, setEditSid] = useState(0)

  // 購物車的商品數量(不重複的)
  const [productCount, setProductCount] = useState(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')).length
      : 0
  )

  // 瀏覽過商品資料
  const [myBrowseRecord, setMyBrowseRecord] = useState([])

  // 更新瀏覽過的商品紀錄 (沒有就添加)
  const updateBrowseRecordToLocalStorage = (product) => {
    let currentBrowseRecord =
      JSON.parse(localStorage.getItem('browseRecord')) || []

    const index = currentBrowseRecord.findIndex((v) => v.sid === product.sid)

    // index > -1 等於已在瀏覽過的商品裡，不需要重複加入
    if (index > -1) {
      return
    } else {
      currentBrowseRecord.push(product)
    }

    if (currentBrowseRecord.length > 4) {
      // 如果localStorage資料超過4筆，就挑出最舊的資料[0]移除
      currentBrowseRecord = currentBrowseRecord.filter((v, i) => {
        return i !== 0
      })
      localStorage.setItem('browseRecord', JSON.stringify(currentBrowseRecord))
    } else {
      localStorage.setItem('browseRecord', JSON.stringify(currentBrowseRecord))
    }

    // 設定資料
    setMyBrowseRecord(currentBrowseRecord)
  }

  // 確認是否有登入 有的話就讓isAuth顯示true
  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem('Member') || '[]')
    if (userLogin.length > 0) {
      setIsAuth(true)
    }
  }, [])

  return (
    <Router>
      <>
        <Navbar
          setControlCate={setControlCate}
          setControlSmallCate={setControlSmallCate}
          setControlSmallBody={setControlSmallBody}
          productCount={productCount}
          isAuth={isAuth}
        />
        <MobileNavBar />
        <ScrollToTop>
          <Switch>
            <MainContent>
              {/* 註冊、登入、預約領藥 */}
              <ZiAllPage
                closeStore={closeStore}
                setCloseStore={setCloseStore}
                setIsAuth={setIsAuth}
              />
              {/* 會員資料修改、會員處方資料列表 */}
              <Route path="/User">
                <MemberCenter />
              </Route>
              {/* 所有商品頁面 */}
              <ProductsAllPage
                controlCate={controlCate}
                controlSmallCate={controlSmallCate}
                controlSmallBody={controlSmallBody}
                setControlCate={setControlCate}
                setControlSmallCate={setControlSmallCate}
                setControlSmallBody={setControlSmallBody}
                productCount={productCount}
                setProductCount={setProductCount}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                myBrowseRecord={myBrowseRecord}
                setMyBrowseRecord={setMyBrowseRecord}
                updateBrowseRecordToLocalStorage={
                  updateBrowseRecordToLocalStorage
                }
              />
              {/* 後臺管理頁面 */}
              <BackStage editSid={editSid} setEditSid={setEditSid} />

              {/* 首頁門市資訊地圖 */}
              <PortiaAllPage
                setCloseStore={setCloseStore}
                setIsAuth={setIsAuth}
                updateBrowseRecordToLocalStorage={
                  updateBrowseRecordToLocalStorage
                }
              />
              {/* 症狀頁 */}
              <Route path="/IconSearch_p1">
                <IconSearch_p1 setIsAuth={setIsAuth} />
              </Route>
              <Route path="/IconSearch_p2">
                <IconSearch_p2 setIsAuth={setIsAuth} />
              </Route>
              {/* 地圖頁 */}
              <Route path="/HospitalPage">
                <HospitalPage />
              </Route>
              {/* 購物車 */}
              <StanleyAllPage
                productCount={productCount}
                setProductCount={setProductCount}
                setIsAuth={setIsAuth}
              />
            </MainContent>
          </Switch>
        </ScrollToTop>
        <BottomNavBar />
        <Footer
          setControlCate={setControlCate}
          setControlSmallCate={setControlSmallCate}
          setControlSmallBody={setControlSmallBody}
          editSid={editSid}
        />
      </>
    </Router>
  )
}

export default App
