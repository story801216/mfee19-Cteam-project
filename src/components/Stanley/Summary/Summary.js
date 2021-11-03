import React from 'react'
import './Summary.css'

function Summary(props) {
  const {
    total,
    mycart,
    productCount,
    deliveryLocation,
    deliveryMethod,
    paymentMethod,
  } = props

  // 傳送表單(儲存資料到local，給下一步去讀取用)
  const handlecheckout = () => {
    const obj = {
      total: total,
      mycart: mycart,
      productCount: productCount(),
      deliveryLocation: deliveryLocation,
      deliveryMethod: deliveryMethod,
      paymentMethod: paymentMethod,
    }

    localStorage.setItem('orderInfo', JSON.stringify(obj))
  }
  return (
    <>
      <div className="summary-box">
        <div className="summary-title">訂單資訊</div>
        <div className="summary-detail-box">
          <div className="summary-detail d-flex justify-content-between">
            <div className="subject">小計</div>
            <div className="price text-right">NT${total}</div>
          </div>
          <div className="summary-detail d-flex justify-content-between">
            <div className="subject">運費</div>
            <div className="price text-right">$0</div>
          </div>
          <div className="border"></div>
          <div className="summary-detail total-number d-flex justify-content-between">
            <div className="subject">總計</div>
            <div className="price text-right">NT${total}</div>
          </div>
        </div>
        <div className="checkout-box">
          <a href="/checkout" onClick={handlecheckout}>
            <div className="checkout-btn text-center mx-auto">前往結帳</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Summary
