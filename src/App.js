import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
// 頁面元件
// 所有商品頁面
import ProductsAllPage from './pages/Ben/ProductsAllPage'
// 後台頁面
import BackStage from './pages/BackStage'
// 共用元件
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/Navbar/Navbar'
import MobileNavBar from './components/MobileNavBar'
import BottomNavBar from './components/BottomNavBar'
import Footer from './components/Footer'
import './App.css'

//品喬---------------------------------------------------------------
import IconSearch_p1 from './pages/Chiao/IconSearch_p1/IconSearch_p1'
import IconSearch_p2 from './pages/Chiao/IconSearch_p2/IconSearch_p2'
import HospitalPage from './pages/Chiao/HospitalPage/HospitalPage'
//品喬---------------------------------------------------------------


function App() {
  // navbar 商品類別欄顏色切換
  const [controlCate, setControlCate] = useState('')
  const [controlSmallCate, setControlSmallCate] = useState('')
  const [controlSmallBody, setControlSmallBody] = useState('')

  // 後台商品編輯sid
  const [editSid, setEditSid] = useState(0)

  return (
    <Router>
      <>
        <NavLink to="/back-stage/products/page/1">後臺管理</NavLink>

        <Navbar
          setControlCate={setControlCate}
          setControlSmallCate={setControlSmallCate}
          setControlSmallBody={setControlSmallBody}
        />
        <MobileNavBar />
        <ScrollToTop>
          <Switch>
            <MainContent>
              {/* 所有商品頁面 */}
              <ProductsAllPage
                controlCate={controlCate}
                controlSmallCate={controlSmallCate}
                controlSmallBody={controlSmallBody}
                setControlCate={setControlCate}
                setControlSmallCate={setControlSmallCate}
                setControlSmallBody={setControlSmallBody}
              />
              {/* 後臺管理頁面 */}
              <BackStage editSid={editSid} setEditSid={setEditSid} />
              {/* 症狀頁 */}
              <Route path="/IconSearch_p1">
                <IconSearch_p1 />
              </Route>
              <Route path="/IconSearch_p2">
                <IconSearch_p2 />
              </Route>
              {/* 地圖頁 */}
              <Route path="/HospitalPage">
                <HospitalPage />
              </Route>
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
