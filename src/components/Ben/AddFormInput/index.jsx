import React from 'react'
import './index.css'

function AddFormInput(props) {
  return (
    <>
      <label htmlFor="sid">編號</label>
      <input type="text" id="sid" name="sid" disabled={true} />

      <label htmlFor="Name">商品名稱</label>
      <input type="text" id="Name" name="Name" />

      <label htmlFor="image">商品圖片</label>
      <input type="text" id="image" name="image" />

      {/* <div className="control-input">
        <input type="text" id="text" />
        <input type="file" id="file" />
      </div> */}
      <label htmlFor="categories">商品類別</label>
      <input type="text" id="categories" name="categories" />

      <label htmlFor="Location">身體部位</label>
      <input type="text" id="Location" name="Location" />

      <label htmlFor="brand_company">品牌 / 製造公司</label>
      <input type="text" id="brand_company" name="brand_company" />

      <label htmlFor="quantity">內容量 / 規格</label>
      <input type="text" id="quantity" name="quantity" />

      <label htmlFor="price">售價</label>
      <input type="text" id="price" name="price" />

      <label htmlFor="Edible_Method">使用方法</label>
      <input type="text" id="Edible_Method" name="Edible_Method" />

      <label htmlFor="place_origin">產地</label>
      <input type="text" id="place_origin" name="place_origin" />

      <label htmlFor="EXP">保存期限</label>
      <input type="text" id="EXP" name="EXP" />

      <label htmlFor="MFD">製造日期</label>
      <input type="text" id="MFD" name="MFD" />
    </>
  )
}

export default AddFormInput
