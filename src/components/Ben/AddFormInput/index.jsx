import React from 'react'
import './index.css'

function AddFormInput(props) {
  const inputTitle = [
    { title: '商品名稱', englishTitle: 'Name' },
    { title: '商品圖片', englishTitle: 'image' },
    { title: '商品類別', englishTitle: 'categories' },
    { title: '身體部位', englishTitle: 'Location' },
    { title: '品牌 / 製造公司', englishTitle: 'brand_company' },
    { title: '內容量 / 規格', englishTitle: 'quantity' },
    { title: '成分 / 材質', englishTitle: 'nutrient' },
    { title: '售價', englishTitle: 'price' },
    { title: '特惠價', englishTitle: 'special_offer' },
    { title: '使用方法', englishTitle: 'Edible_Method' },
    { title: '產地', englishTitle: 'place_origin' },
    { title: '保存期限', englishTitle: 'EXP' },
    { title: '製造日期', englishTitle: 'MFD' },
  ]
  return (
    <>
      <label htmlFor="sid">編號</label>
      <input type="text" id="sid" name="sid" disabled={true} />

      {inputTitle.map((v, i) => {
        return (
          <div>
            <label htmlFor={v.englishTitle}>{v.title}</label>
            <input type="text" id={v.englishTitle} name={v.englishTitle} />
          </div>
        )
      })}

      {/* <div className="control-input">
        <input type="text" id="text" />
        <input type="file" id="file" />
      </div> */}
    </>
  )
}

export default AddFormInput
