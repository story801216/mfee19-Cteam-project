import React, { useState, useRef } from 'react'
import './Member_BookMark.css'

function BookMart(props) {
  const MobileListRef = useRef(null)
  const [optionNow, setOptionNow] = useState(0)
  const optionName = ['會員資料', '會員處方簽進度與追蹤', '訂單查詢']
  return (
    <>
      <h2 className="Member-bookMark-title">會員中心</h2>
      <div className="Member-bookMark">
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
            <img
              className="Member-bookMark-mobile-icon"
              src="http://localhost:3000/images/icon/other.jpg"
              alt=""
            />
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
    </>
  )
}

export default BookMart
