import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Login from './會員登入/Login'
import Register from './會員註冊/Register'
import Prescription_Reserve from './處方籤預約領藥/Prescription_Reserve'
import Select_Shop from '../Yiling/Select_Shop/Select_shop'

function ZiAllPage() {
  return (
    <>
      <Switch>
        {/* 登入頁 */}
        <Route path="/Login">
          <Login />
        </Route>
        {/* 註冊頁 */}
        <Route path="/Register">
          <Register />
        </Route>

        {/* 處方預約領藥頁 */}
        <Route path="/Prescription_Reserve">
          <Prescription_Reserve />
        </Route>
      </Switch>
    </>
  )
}

export default ZiAllPage
