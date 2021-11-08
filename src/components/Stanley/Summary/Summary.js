import React from 'react'
import { useHistory } from 'react-router-dom'
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

  let history = useHistory()

  // 傳送表單(儲存資料到local，給下一步去讀取用)
  const handlecheckout = () => {
    if (!deliveryLocation) {
      alert('未選取送貨地點')
      return
    }
    if (!deliveryMethod) {
      alert('未選取送貨方式')
      return
    }
    if (!paymentMethod) {
      alert('未選取付款方式')
      return
    }
    const obj = {
      total: total,
      mycart: mycart,
      productCount: productCount,
      deliveryLocation: deliveryLocation,
      deliveryMethod: deliveryMethod,
      paymentMethod: paymentMethod,
    }

    localStorage.setItem('orderInfo', JSON.stringify(obj))
    history.push('/checkout')
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
          <button
            className="checkout-btn text-center mx-auto"
            onClick={handlecheckout}
          >
            前往結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default Summary
