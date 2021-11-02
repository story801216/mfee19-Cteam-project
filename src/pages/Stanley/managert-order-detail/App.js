import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Cart3 from '../../../components/Stanley/Cart3/Cart3'
import Checkline2 from '../../../components/Stanley/Checkline2/Checkline2'

function App(props) {
  const [orderInfo, setOrderInfo] = useState('')
  const [orderStatus, setOrderStatus] = useState()
  const order_sid = props.match.params.order_sid

  // componentdidMount：讀取完成的訂單資訊
  useEffect(() => {
    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(
        `http://localhost:3001/cart/admin/order-detail/${order_sid}`
      )
      console.log(r)
      // data 是回傳的自動命名 (不太確定)
      setOrderInfo(r.data)
    }
    getInfo()
  }, [])

  // TODO：修改訂單狀態
  const handleSubmit = async () => {
    const r = await axios.put
  }
  return (
    <>
      <div className="container">
        <Checkline2 />
        <Cart3 orderInfo={orderInfo} />

        {/* 訂單明細 */}
        <div className="order-detail-box">
          <div className="order-detail-title d-flex justify-content-between align-items-center">
            訂單明細
          </div>
          {orderInfo && (
            <div className="row">
              <div className="col-xl-6 col-12">
                <div className="subtitle">訂購人資訊</div>
                <div className="detail-box">
                  {/* 姓名：王曉華 */}
                  姓名：{orderInfo.order_list[0].member_name}
                  <br />
                  {/* 電話：0928828818 */}
                  電話：{orderInfo.order_list[0].member_mobile}
                  <br />
                  信箱：xiaohai@gmail.com
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="subtitle">付款資訊</div>
                <div className="detail-box">
                  付款方式：{orderInfo.order_list[0].payment_method}
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="subtitle">送貨資訊</div>
                <div className="detail-box">
                  收件人姓名：{orderInfo.order_list[0].addressee_name}
                  <br />
                  收件人電話：{orderInfo.order_list[0].addressee_mobile}
                  <br />
                  運送方式：{orderInfo.order_list[0].delivery_method}
                  <br />
                  運送地址：{orderInfo.order_list[0].address}
                  <br />
                  訂單備註：{orderInfo.order_list[0].order_note}
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="subtitle">訂單資訊</div>
                <div className="detail-box">
                  訂單編號：{orderInfo.order_list[0].sid}
                  <br />
                  {/* 訂單日期：{orderInfo.order_date.slice(0, 10)} */}
                  訂單狀態：
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setOrderStatus(e.target.value)
                    }}
                  >
                    <option value="訂單處理中">訂單處理中</option>
                    <option value="已出貨">已出貨</option>
                    <option value="運送中">運送中</option>
                    <option value="訂單完成">訂單完成</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="save-change-box">
            <div className="save-change-btn" onClick={handleSubmit}>
              儲存變更
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(App)