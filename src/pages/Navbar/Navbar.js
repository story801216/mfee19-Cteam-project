import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import { BsCart2 } from 'react-icons/bs' //購物車
import { FaRegUserCircle } from 'react-icons/fa' //會員
import { FiHeart } from 'react-icons/fi' //愛心
import { MdOutlineAssignment } from 'react-icons/md' //處方籤

import NavbarPush from './components/NavbarPush' //活動頁籤
import NewPush from './components/NewPush' //最新消息頁籤

const halfCirclePic = 'http://localhost:3000/images/encyclopedia/halfcircle.png' //半圓的圖
const LogoPic = 'http://localhost:3000/images/Logo.jpg' //Logo圖

function Navbar(props) {
  const {
    setControlCate,
    setControlSmallCate,
    setControlSmallBody,
    productCount,
  } = props

  /*下拉式選單狀態 */
  const [buttonIndex, setButtonIndex] = useState(0)

  return (
    <>
      <div
        className="navbarAll"
        onMouseLeave={() => {
          setButtonIndex(0)
        }}
      >
        <div className="navbarDesTop">
          <div className="homeIconLogo">
            <Link to="/">
              <img src={LogoPic} alt="" />
            </Link>
          </div>
          <div className="navbarLinkDesTop">
            <div className="navbarLinkDesTop1">
              <Link to="/Prescription_Reserve">
                <a href="/Prescription_Reserve" className="navChandePageEnc">
                  <div className="positionIconA">
                    <MdOutlineAssignment />
                    <p>處方領藥</p>
                  </div>
                </a>
              </Link>
              <Link to="/User/Member_revise">
                <a href="/User/Member_revise" className="navChandePageEnc">
                  <div className="positionIconA">
                    <FaRegUserCircle />
                    <p>會員中心</p>
                  </div>
                </a>
              </Link>
              <div className="navbarAllIcon">
                <Link to={'/followdPage'} className="navChandePageEnc">
                  <FiHeart />
                </Link>
                <a href="/cart" className="navChandePageEnc cart-count-box">
                  {/* 商品購物車數量 */}
                  <BsCart2 />
                  {productCount !== 0 && (
                    <span className="cart-count">{productCount}</span>
                  )}
                </a>
                <Link to="/Login">
                  <a href="/Login" className="navChandePageEnc">
                    <FaRegUserCircle />
                  </a>
                </Link>
              </div>
            </div>
            <div className="navbarLinkDesTop2">
              <Link
                to={'/shop'}
                onClick={() => {
                  setControlCate('')
                  setControlSmallCate('')
                  setControlSmallBody('')
                }}
              >
                <p className="navbarIconLine1">線上購物</p>
              </Link>
              <div className="forCenter">
                <p
                  className="navbarIconLine1"
                  onMouseEnter={() => {
                    setButtonIndex(1)
                  }}
                >
                  保健知識
                </p>
                <img
                  className={
                    buttonIndex === 1
                      ? 'halfCircleMove'
                      : 'halfCircleMove hideClass'
                  }
                  src={halfCirclePic}
                  alt="半圓"
                />
              </div>
              <div className="forCenter">
                <p
                  className="navbarIconLine1"
                  onMouseEnter={() => {
                    setButtonIndex(2)
                  }}
                >
                  消息專區
                </p>
                <img
                  className={
                    buttonIndex === 2
                      ? 'halfCircleMove'
                      : 'halfCircleMove hideClass'
                  }
                  src={halfCirclePic}
                  alt="半圓"
                />
              </div>
              <div className="forCenter">
                <p
                  onMouseEnter={() => {
                    setButtonIndex(3)
                  }}
                  className="navbarIconLineAbouts"
                >
                  關於我們
                </p>
                <img
                  className={
                    buttonIndex === 3
                      ? 'halfCircleMove navbarIconLineAbouts'
                      : 'halfCircleMove hideClass'
                  }
                  src={halfCirclePic}
                  alt="半圓"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={buttonIndex === 1 ? 'buttonAndIconPush' : ''}>
          {buttonIndex === 1 ? <NavbarPush /> : ''}
        </div>
        <div className={buttonIndex === 2 ? 'buttonAndIconPush' : ''}>
          {buttonIndex === 2 ? (
            <NewPush
              name1="活動專區"
              name2="相關連結"
              pos1={1700}
              pos2={4300}
              path1="/HomePage"
              path2="/HomePage"
            />
          ) : (
            ''
          )}
        </div>
        <div className={buttonIndex === 3 ? 'buttonAndIconPush' : ''}>
          {buttonIndex === 3 ? (
            <NewPush
              name1="品牌介紹"
              name2="門市資訊"
              pos1={3200}
              pos2={100}
              path1="/HomePage"
              path2="/StoresMap"
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
