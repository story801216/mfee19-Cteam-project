import React, { useState, useEffect } from 'react'
import './index.scss'
import Checkline from '../../../components/Stanley/Checkline/Checkline'
import Cart1 from '../../../components/Stanley/Cart1/Cart1'
import Summary from '../../../components/Stanley/Summary/Summary'

// SC1
function App(props) {
  const { productCount, setProductCount } = props

  // Checkline state
  const state = [1, 2, 2]
  // 運送、付款選項的狀態
  const [deliveryLocation, setDeliveryLocation] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  // localStorage裡面加入購物車的商品
  const [mycart, setMycart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )



  const total = () => {
    let sum = 0
    for (let i = 0; i < mycart.length; i++) {
      sum += mycart[i].amount * mycart[i].price
    }
    return sum
  }

  return (
    <>
      <div className="SC1">
        <div className="container">
          {/* checkline 進度條 */}
          <Checkline state={state} />
          <Cart1
            mycart={mycart}
            setMycart={setMycart}
            productCount={productCount}
            setProductCount={setProductCount}
          />

          {/* 送貨及付款方式(左)、訂單資訊(右) */}
          <div className="row justify-content-between">
            <div className="col-xl-7 col">
              {/* 送貨及付款(左) */}
              <div className="delivery-payment-box">
                <div className="delivery-payment-title">付款及送貨方式</div>
                <div className="dp-select-area">
                  <div className="subtitle">送貨地點</div>
                  <select
                    name="deliveryLocation"
                    id="deliveryLocation"
                    value={deliveryLocation}
                    onChange={(e) => {
                      setDeliveryLocation(e.target.value)
                    }}
                  >
                    <option value="">-選擇送貨地點-</option>
                    <option value="台灣">台灣</option>
                    <option value="離島">離島</option>
                  </select>
                  <div className="subtitle">送貨方式</div>
                  <select
                    name="delivery_option"
                    id="delivery_option"
                    value={deliveryMethod}
                    onChange={(e) => {
                      setDeliveryMethod(e.target.value)
                    }}
                  >
                    <option value="">-選擇送貨方式-</option>
                    <option value="宅配">宅配</option>
                    <option value="門市自取">門市自取</option>
                    <option value="超商自取">超商自取</option>
                  </select>
                  <div className="subtitle">付款方式</div>
                  <select
                    name="paymentMethod"
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value)
                    }}
                  >
                    <option value="">-選擇付款方式-</option>
                    <option value="信用卡">信用卡</option>
                    <option value="轉帳">轉帳</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              {/* 訂單資訊框(右) */}
              <Summary
                total={total()}
                mycart={mycart}
                productCount={productCount}
                deliveryLocation={deliveryLocation}
                deliveryMethod={deliveryMethod}
                paymentMethod={paymentMethod}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
