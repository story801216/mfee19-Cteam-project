import React from 'react'
import './ClientOrderList.css'
import { MdKeyboardArrowRight } from 'react-icons/md'

function ClientOrderList(props) {
  const { sid, order_date, order_status, amount } = props

  return (
    <>
      {/* 桌機版 */}
      <div className="list-content d-xl-block d-none">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <div className="col-3">{sid}</div>
              <div className="col-3">{order_date.slice(0, 10)}</div>
              <div className="col-3">NT${amount}</div>
              <div className="col-3">{order_status}</div>
            </div>
          </div>
          <div className="col-2">
            <a href="/order-detail">查閱內容</a>
          </div>
        </div>
      </div>

      {/* 手機版 */}
      <div className="d-xl-none">
        <div className="list-content">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6">訂單編號：{sid}</div>
                <div className="col-6 text-right red-word">{order_status}</div>
              </div>
            </div>
            <div className="col-12">訂單日期：{order_date.slice(0, 10)}</div>
            <div className="col-12">
              <div className="row">
                <div className="col-8">訂單總額：NT${amount}</div>
                <div className="col-4 text-right">
                  <a href="/order-detail">
                    <MdKeyboardArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientOrderList
