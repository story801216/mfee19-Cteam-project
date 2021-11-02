/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './PortiaAllPage.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../Home/HomePage' //引入首頁
import StoresMap from '../StoresMap/StoresMap' //門市資訊
import HealthEnCyc from '../HealthEnCyc/HealthEnCyc' //保健百科頁面
import HealthEnIndex from '../HealthEnIndex/HealthEnIndex' //保健百科頁面的內頁
import Select_shop from '../Select_Shop/Select_shop' //處方籤預約領藥

function PortiaAllPage(props) {
  const { setCloseStore } = props
  return (
    <>
      {/* 主要內容 */}
      <Switch>
        <Route path="/HomePage">
          <HomePage />
        </Route>
        <Route path="/StoresMap">
          <StoresMap />
        </Route>
        <Route path="/HealthEnCyc">
          <HealthEnCyc />
        </Route>
        <Route path="/HealthEnIndex/:Id">
          <HealthEnIndex />
        </Route>
        <Route path="/Select_shop">
          <Select_shop setCloseStore={setCloseStore} />
        </Route>
      </Switch>
    </>
  )
}

export default PortiaAllPage
