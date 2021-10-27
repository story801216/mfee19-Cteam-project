import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './index.css'

function SpecialOfferProductItem(props) {
  return (
    <div className="product">
      <div className="item">
        {/* 圖片 */}
        <div className="pic">
          <img src={props.image} alt="" />
        </div>
        {/* 上層線 */}
        <div className="line-top"></div>
        <div className="text">
          {/* 商品名稱 */}
          <div className="title">
            <p>{props.Name}</p>
          </div>
          {/* 下層線 */}
          <div className="line-bottom"></div>
          {/* 價格 */}
          <div className="price">
            <p className="original-price">${props.price}</p>
            <p className="special-offer">${props.special_offer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOfferProductItem
