import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'

function BookMart(props) {
  const { location, editSid } = props
  const MobileListRef = useRef(null)
  const [optionNow, setOptionNow] = useState(0)
  const optionName = [
    '所有會員資料',
    '會員處方簽管理',
    '所有商品',
    '商城訂單管理',
    '營業數據',
  ]

  console.log(props)
  return (
    <div
      class="container"
      // 到這兩個頁面，就不顯示頁簽
      style={
        location.pathname === '/back-stage/products/add' ||
        location.pathname === '/back-stage/products/edit/' + editSid
          ? { display: 'none' }
          : { display: 'block' }
      }
    >
      {/* 大標題 */}
      <h2 className="back-stage-title">後台管理</h2>
      {/* 頁簽 */}
      <div className="bookMark">
        {/* 電腦 */}
        {/* className 添加 now 變色 */}
        <ul className="option-list-computer">
          {optionName.map((v, i) => {
            return (
              <li className="option" key={i}>
                <a
                  href="#/"
                  className={optionNow === i ? 'now' : ''}
                  onClick={() => {
                    setOptionNow(i)
                  }}
                >
                  {v}
                </a>
              </li>
            )
          })}
        </ul>
        {/* 手機 */}
        <div className="option-mobile-now">
          {optionName.map((v, i) => {
            return (
              <div href="#/" key={i} className={optionNow === i ? 'show' : ''}>
                {v}
              </div>
            )
          })}
        </div>
        <div className="icon">
          <a
            href="#/"
            onClick={() => {
              MobileListRef.current.className.includes('show')
                ? MobileListRef.current.classList.remove('show')
                : MobileListRef.current.classList.add('show')
            }}
          >
            <img src="http://localhost:3000/images/icon/other.jpg" alt="" />
          </a>
          <ul className="option-list-mobile" ref={MobileListRef}>
            {optionName.map((v, i) => {
              return (
                <li className="option" key={i}>
                  <a
                    href="#/"
                    onClick={() => {
                      setOptionNow(i)
                    }}
                  >
                    {v}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withRouter(BookMart)
