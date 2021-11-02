import React from 'react'
import './ClientOrderDetail.css'

function OrderDetail(props) {
  const { order_list } = props
  return (
    <>
      {/* 訂單明細  */}
      <div class="order-detail-box">
        <div class="order-detail-title">訂單明細</div>
        <div class="row">
          <div class="col-xl-4 col-12">
            <div class="subtitle">訂購人資訊</div>
            <div class="detail-box">
              {/* 訂購人姓名 */}
              姓名：{order_list.member_name}
              <br />
              {/* 訂購人電話 */}
              電話：{order_list.member_mobile}
              <br />
              {/* 訂購人信箱 */}
              信箱：xiaohai@gmail.com
            </div>
          </div>
          <div class="col-xl-4 col-12">
            <div class="subtitle">送貨資訊</div>
            <div class="detail-box">
              {/* 收件人姓名 */}
              姓名：{order_list.addressee_name}
              <br />
              {/* 收件人電話 */}
              電話：{order_list.addressee_mobile}
              <br />
              {/* 運送方式 */}
              運送方式：{order_list.delivery_method}
              <br />
              {/* 運送地址 */}
              運送地址：
              {order_list.address
                ? order_list.address
                : order_list.convenience_store + '門市'}
              <br />
              {/* 訂單備註 */}
              訂單備註：{order_list.order_note}
            </div>
          </div>
          <div class="col-xl-4 col-12">
            <div class="subtitle">付款資訊</div>
            <div class="detail-box">付款方式：{order_list.payment_method}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetail