import React, { useState ,useEffect} from 'react'
import './ProductItem.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

function ProductItem(props) {
  // 加入購物車的產品資訊
  const {
    mycartDisplay,
    setMycartDisplay,
    id,
    picture,
    name,
    price,
    count,
    setCount,
  } = props

  // 移除購物車內的商品
  const removeCartItem = (id) => {
    // 讀取原本的資料
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    // 弄一個空陣列，把指定id以外的商品放進去
    let newMyCart = []

    for (let i = 0; i < myCart.length; i++) {
      if (myCart[i].id !== id) {
        newMyCart.push(myCart[i])
      }
    }
    // 儲存到localStorage
    localStorage.setItem('cart', JSON.stringify(newMyCart))
    setMycartDisplay(newMyCart)
  }

  // 增減購物車內的商品
  const updateToLocalStorage = (value) => {
    // 讀取localstorage的商品清單
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    // 複製一個新的陣列
    const newMyCart = [...myCart]

    // 跑回圈，找到id相符的商品，並更動amount數量
    for (let i = 0; i < myCart.length; i++) {
      if (newMyCart[i].id === value.id) {
        if ((newMyCart[i].amount += value.amount) < 1) {
          newMyCart[i].amount = 1
        }
      }
    }
    // 把新的陣列儲存到localStorage
    localStorage.setItem('cart', JSON.stringify(newMyCart))

    // 改變畫面上的數字
    setCount(count + value.amount)
    setMycartDisplay(newMyCart)
  }
  // 產品數量
  return (
    <>
      {/* 桌機版商品(一列)*/}
      <div className="d-xl-block d-none">
        <div className="cart-column">
          {/* 商品圖片 */}
          <div className="row align-items-center">
            <div className="col-5 ">
              <div className="product-info d-flex align-items-center">
                <div className="product-img">
                  <img src={picture} alt="" />
                </div>
                <div className="product-description">{name}</div>
              </div>
            </div>
            {/* 單價 */}
            <div className="col-2 text-center">{price}</div>
            {/* 增減按鈕 */}
            <div className="col-2 ">
              <div className="plus-minus-btn d-flex">
                <div
                  className="minus d-flex"
                  onClick={() => {
                    updateToLocalStorage({
                      id: id,
                      amount: -1,
                    })
                  }}
                >
                  <AiOutlineMinus />
                </div>
                <div className="number text-center">{count}</div>
                <div
                  className="plus d-flex"
                  onClick={() => {
                    updateToLocalStorage({
                      id: id,
                      amount: 1,
                    })
                  }}
                >
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
            <div className="col-2 text-center">NT${price * count}</div>
            <div
              className="col-1 text-center"
              onClick={() => {
                removeCartItem(id)
              }}
            >
              <FaTimes />
            </div>
          </div>
        </div>
      </div>

      {/* 手機版商品(一列)*/}
      <div className="d-xl-none">
        <div className="cart-item">
          <div className="row">
            {/* 商品圖片區(左) */}
            <div className="col-4">
              <div className="product-img">
                <img src={picture} alt="" />
              </div>
            </div>
            {/* 其他文字區(右) */}
            <div className="col-8">
              {/* 商品介紹&X(上區) */}
              <div className="row">
                <div className="col-10">
                  <div className="product-description">{name}</div>
                </div>
                <div className="col-2">
                  <div className="text-right">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              </div>
              {/* 價格(中區) */}
              <div className="row">
                <div className="col-3">
                  <div className="price">NT${price}</div>
                </div>
              </div>
              {/* 增減按鈕(下區) */}
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <div className="plus-minus-btn d-flex ">
                    <div
                      className="minus d-flex"
                      onClick={() => {
                        updateToLocalStorage({
                          id: id,
                          amount: -1,
                        })
                      }}
                    >
                      <AiOutlineMinus />
                    </div>
                    <div className="number text-center">1</div>
                    <div
                      className="plus d-flex"
                      onClick={() => {
                        updateToLocalStorage({
                          id: id,
                          amount: 1,
                        })
                      }}
                    >
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
