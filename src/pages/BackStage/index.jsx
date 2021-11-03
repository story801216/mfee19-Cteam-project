import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import BookMart from '../../components/Ben/BookMart'
import ProductsSearchPageBackStage from './ProductsSearchPageBackStage'
import ProductsManagementPage from './ProductsManagementPage'
import EditProductsPage from './EditProductsPage'
import AddProductsPage from './AddProductsPage'
import Backstage_Member_Management from './Backstage_Member_Management/Backstage_Member_Management'
import Backstage_Prescription_Management from './Backstage_Prescription_Management/Backstage_Prescription_Management'
import './index.css'
// forceRefresh={true}
function BackStage(props) {
  // 回傳給footer商品sid
  const { editSid, setEditSid } = props
  // 後臺商品搜索關鍵字
  const [backStageProdSearchWord, setBackStageProdSearchWord] = useState('')

  // 後台商品totalPages
  const [backStageProdsTotalPages, setBackStageProdsTotalPages] = useState(0)

  return (
    <>
      <Switch>
        {/* 後台商品搜索頁 */}
        <Route path="/back-stage/products/page/search/:word/:number">
          <BookMart />
          <ProductsSearchPageBackStage
            backStageProdSearchWord={backStageProdSearchWord}
            setBackStageProdSearchWord={setBackStageProdSearchWord}
            backStageProdsTotalPages={backStageProdsTotalPages}
            setBackStageProdsTotalPages={setBackStageProdsTotalPages}
          />
        </Route>
        {/* 後台商品列表頁 */}
        <Route path="/back-stage/products/page/:page">
          <BookMart />
          <ProductsManagementPage
            backStageProdSearchWord={backStageProdSearchWord}
            setBackStageProdSearchWord={setBackStageProdSearchWord}
            backStageProdsTotalPages={backStageProdsTotalPages}
            setBackStageProdsTotalPages={setBackStageProdsTotalPages}
          />
        </Route>
        {/* 後台商品編輯頁 */}
        <Route path="/back-stage/products/edit/:sid">
          <EditProductsPage setEditSid={setEditSid} />
        </Route>
        {/* 後台新增商品頁 */}
        <Route path="/back-stage/products/add">
          <AddProductsPage
            backStageProdsTotalPages={backStageProdsTotalPages}
          />
        </Route>
        {/* 後台會員管理列表頁面 */}
        <Route path="/back-stage/Backstage_Member_Management">
          <BookMart />
          <Backstage_Member_Management />
        </Route>
        {/* 後台處方管理列表頁面 */}
        <Route path="/back-stage/Backstage_Prescription_Management">
          <BookMart />
          <Backstage_Prescription_Management />
        </Route>
      </Switch>
    </>
  )
}

export default BackStage
