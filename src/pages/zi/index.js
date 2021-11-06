import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'
import Login from './會員登入/Login'
import Register from './會員註冊/Register'
import Prescription_Reserve from './處方籤預約領藥/Prescription_Reserve'

function ZiAllPage(props) {
  const { closeStore, setIsAuth } = props

  // 確認是否有登入 有的話就讓isAuth顯示true
  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem('Member') || '[]')
    if (userLogin.length > 0) {
      setIsAuth(true)
    }
  }, [props.location.pathname])
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
          <Prescription_Reserve closeStore={closeStore} />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(ZiAllPage)
