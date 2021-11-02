import React, { useState, useEffect } from 'react'
import './App.scss'
import Checkline from '../../../components/Stanley/Checkline/Checkline'
import Cart1 from '../../../components/Stanley/Cart1/Cart1'
import Summary from '../../../components/Stanley/Summary/Summary'

// SC1
function App() {
  // Checkline state
  const state = [1, 2, 2]
  // 運送、付款選項的狀態
  const [deliveryLocation, setDeliveryLocation] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  // localStorage裡面加入購物車的商品
  const [mycart, setMycart] = useState([])
  // 在購物車中會顯示的商品狀態
  const [mycartDisplay, setMycartDisplay] = useState([])

  // didMount 讀 localStorage
  useEffect(() => {
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    setMycart(myCart)
  }, [])

  //  componentDidUpdate
  useEffect(() => {
    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
    // 把整理好的商品清單存到local
    localStorage.setItem('cart', JSON.stringify(newMycartDisplay))
  }, [mycart])

  // Summary
  // 計算目前所有的不重複商品數量
  const productCount = () => {
    let totalCount = mycartDisplay.length
    
    return totalCount
  }

  // 計算目前所有的商品總價
  const total = () => {
    let sum = 0
    for (let i = 0; i < mycartDisplay.length; i++) {
      sum += mycartDisplay[i].amount * mycartDisplay[i].price
    }
    console.log(sum)
    return sum
  }

  return (
    <>
      <div className="SC1">
        <div className="container">
          {/* checkline 進度條 */}
          <Checkline state={state} />
          <Cart1
            mycartDisplay={mycartDisplay}
            setMycartDisplay={setMycartDisplay}
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
                mycartDisplay={mycartDisplay}
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
