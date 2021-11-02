import { Route, Switch, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import Member_revise from '../../pages/zi/會員中心-會員資料修改/Member_revise'
import Prescription_stage from '../../pages/zi/會員中心-處方進度追蹤/Prescription_stage'
import Member_BookMark from '../../components/Member_BookMark/Member_BookMark'

function MemberCenter() {
  return (
    <>
      <Switch>
        <Member_BookMark />
        {/* 會員中心-會員資料修改 */}
        <Route path="/User/Member_revise">
          <Member_revise />
        </Route>
        {/* 會員中心-處方進度追蹤 */}
        <Route path="/User/Prescription_stage">
          <Prescription_stage />
        </Route>
      </Switch>
    </>
  )
}

export default MemberCenter
