import React from 'react'
import './ManagerOrderList.css'
import {devUrl} from './../../../config/index'
import EditProductsPage from '../../../pages/BackStage/EditProductsPage'

function ManagerOrderList(props) {
  const { sid, member_name, amount, order_date, order_status } = props

  return (
    <>
      {/* 桌機版 */}
      <div className="d-xl-block d-none">
        <div className="field-content-box">
          {/* 訂單內容*1 */}
          <div className="field-content">
            <div className="row">
              <div className="col-1 text-center">
                <input type="checkbox" />
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-2">{sid}</div>
                  <div className="col-2">{order_date.slice(0, 10)}</div>
                  <div className="col-2">{member_name}</div>
                  <div className="col-2">NT${amount}</div>
                  <div className="col-2">已付款</div>
                  <div className="col-2">{order_status}</div>
                </div>
              </div>
              <div className="col-1">
                <div className="buttons">
                  <a href={'/admin/order-detail/' + sid} className="edit">
                    <div>
                      <img src={`${devUrl}/images/icon/edit.png`} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 手機版 */}
      <div className="d-xl-none">
        <div className="field-content">
          <div className="row">
            <div className="col-6">訂單編號</div>
            <div className="col-6 text-right">{sid}</div>
          </div>
          <div className="row">
            <div className="col-6">訂購日期</div>
            <div className="col-6 text-right">{order_date.slice(0, 10)}</div>
          </div>
          <div className="row">
            <div className="col-6">訂購人</div>
            <div className="col-6 text-right">{member_name}</div>
          </div>
          <div className="row">
            <div className="col-6">訂單總額</div>
            <div className="col-6 text-right">NT${amount}</div>
          </div>
          <div className="row">
            <div className="col-6">付款狀態</div>
            <div className="col-6 text-right">已付款</div>
          </div>
          <div className="row">
            <div className="col-6">訂單狀態</div>
            <div className="col-6 text-right red-word">{order_status}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagerOrderList