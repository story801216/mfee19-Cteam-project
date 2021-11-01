import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './index.css'

function ProductItem(props) {
  const { price, Name, image } = props
  // console.log(product)
  return (
    <div className="product">
      <div className="item">
        {/* 圖片 */}
        <div className="pic">
          <img src={image} alt="" />
        </div>
        {/* 上層線 */}
        <div className="line-top"></div>
        <div className="text">
          {/* 商品名稱 */}
          <div className="title">
            <p>{Name}</p>
          </div>
          {/* 下層線 */}
          <div className="line-bottom"></div>
          {/* 價格 */}
          <div className="price">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
