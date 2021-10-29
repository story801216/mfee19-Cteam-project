import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import ProductsFirstPage from './ProductsFirstPage'
import ProductsClickedPage from './ProductsClickedPage'
import ProductsCategoryPage from './ProductsCategoryPage'
import ProductsSearchPage from './ProductsSearchPage'
import ProductsFollowPage from './ProductsFollowPage'
import ProductsDetailPage from './ProductsDetailPage'
import './index.css'
// forceRefresh={true}
function ProductsAllPage(props) {
  const {
    controlCate,
    controlSmallCate,
    controlSmallBody,
    setControlCate,
    setControlSmallCate,
    setControlSmallBody,
  } = props
  const cates = [
    {
      path: 'http://localhost:3000/images/icon/5900380.png',
      name: '保健食品',
    },
    {
      path: 'http://localhost:3000/images/icon/8562214.png',
      name: '生活用品',
    },
    {
      path: 'http://localhost:3000/images/icon/3533619.png',
      name: '醫療器材',
    },
  ]
  const bodys = [
    {
      path: 'http://localhost:3000/images/icon/3608142.png',
      name: '頭部',
    },
    {
      path: 'http://localhost:3000/images/icon/5889033.png',
      name: '臉部',
    },
    {
      path: 'http://localhost:3000/images/icon/4631528.png',
      name: '眼睛',
    },
    {
      path: 'http://localhost:3000/images/icon/6282635.png',
      name: '口腔',
    },
    {
      path: 'http://localhost:3000/images/icon/3501502.png',
      name: '身體',
    },
    {
      path: 'http://localhost:3000/images/icon/3191651.png',
      name: '肺部',
    },
    {
      path: 'http://localhost:3000/images/icon/3608121.png',
      name: '腸胃',
    },
    {
      path: 'http://localhost:3000/images/icon/4367222.png',
      name: '皮膚',
    },
    {
      path: 'http://localhost:3000/images/icon/3653178.png',
      name: '骨骼',
    },
    {
      path: 'http://localhost:3000/images/icon/7561937.png',
      name: '手部',
    },
    {
      path: 'http://localhost:3000/images/icon/3608143.png',
      name: '足部',
    },
    {
      path: 'http://localhost:3000/images/icon/6282671.png',
      name: '血液',
    },
    {
      path: 'http://localhost:3000/images/icon/6695372.png',
      name: '睡眠',
    },
    {
      path: 'http://localhost:3000/images/icon/1414904.png',
      name: '其他',
    },
  ]

  const cateSelect = ['保健食品', '生活用品', '醫療器材']
  const bodySelect = [
    '頭部',
    '臉部',
    '眼睛',
    '口腔',
    '身體',
    '肺部',
    '腸胃',
    '皮膚',
    '骨骼',
    '手部',
    '足部',
    '血液',
    '睡眠',
    '其他',
  ]

  // 搜索關鍵字
  const [searchWord, setSearchWord] = useState('')

  // 商品種類關鍵字
  const [cateWord, setCateWord] = useState('')
  const [locationWord, setLocationWord] = useState('')

  // 瀏覽過商品資料
  const [myBrowseRecord, setMyBrowseRecord] = useState([])

  // 更新瀏覽過的商品紀錄 (沒有就添加)
  const updateBrowseRecordToLocalStorage = (product) => {
    let currentBrowseRecord =
      JSON.parse(localStorage.getItem('browseRecord')) || []

    const index = currentBrowseRecord.findIndex((v) => v.sid === product.sid)

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

  return (
    <>
      <Switch>
        {/* 商品分類頁 */}
        <Route path="/prod-list/page/categories/:cate/:number">
          <ProductsCategoryPage
            cates={cates}
            bodys={bodys}
            cateWord={cateWord}
            setCateWord={setCateWord}
            locationWord={locationWord}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            cateSelect={cateSelect}
            bodySelect={bodySelect}
          />
        </Route>
        {/* 商品搜索頁 */}
        <Route path="/prod-list/page/search/:word/:number">
          <ProductsSearchPage
            cates={cates}
            bodys={bodys}
            cateWord={cateWord}
            setCateWord={setCateWord}
            locationWord={locationWord}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            cateSelect={cateSelect}
            bodySelect={bodySelect}
          />
        </Route>
        {/* 商品詳細頁 */}
        <Route path="/prod-list/prod/:sid">
          <ProductsDetailPage
            cates={cates}
            bodys={bodys}
            cateWord={cateWord}
            setCateWord={setCateWord}
            locationWord={locationWord}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            myBrowseRecord={myBrowseRecord}
            setMyBrowseRecord={setMyBrowseRecord}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
        </Route>
        {/* 商品列表頁 */}
        <Route path="/prod-list/page/:page">
          <ProductsClickedPage
            cates={cates}
            bodys={bodys}
            cateWord={cateWord}
            setCateWord={setCateWord}
            locationWord={locationWord}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            myBrowseRecord={myBrowseRecord}
            setMyBrowseRecord={setMyBrowseRecord}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            cateSelect={cateSelect}
            bodySelect={bodySelect}
          />
        </Route>
        {/* 商品追蹤頁 */}
        <Route path="/followdPage">
          <ProductsFollowPage
            cates={cates}
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            cateSelect={cateSelect}
          />
        </Route>
        {/* 商品主頁 */}
        <Route path="/shop">
          <ProductsFirstPage
            cates={cates}
            bodys={bodys}
            cateWord={cateWord}
            setCateWord={setCateWord}
            locationWord={locationWord}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
            updateBrowseRecordToLocalStorage={updateBrowseRecordToLocalStorage}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
        </Route>
      </Switch>
    </>
  )
}

export default ProductsAllPage
