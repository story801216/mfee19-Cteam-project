import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

import { BsCart2 } from 'react-icons/bs' //購物車
import { FaRegUserCircle } from 'react-icons/fa' //會員
import { FiHeart } from 'react-icons/fi' //愛心
import { MdOutlineAssignment } from 'react-icons/md' //處方籤

import NavbarPush from './components/NavbarPush' //活動頁籤
import NewPush from './components/NewPush' //最新消息頁籤

function Navbar(props) {
  /*下拉式選單狀態 */
  const [buttonIndex, setButtonIndex] = useState(0)
  // 商品 控制選取的動態效果
  const { setControlCate, setControlSmallCate, setControlSmallBody } = props

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
            <img src="http://localhost:3000/images/Logo.jpg" alt="" />
          </div>
          <div className="navbarLinkDesTop">
            <div className="navbarLinkDesTop1">
              <a href="https://www.youtube.com/" className="navChandePageEnc">
                <p className="positionIconA">
                  <MdOutlineAssignment />
                  <p>處方領藥</p>
                </p>
              </a>
              <div className="navbarAllIcon">
                <NavLink to="/followdPage" className="navChandePageEnc">
                  <FiHeart />
                </NavLink>
                <a href="https://www.youtube.com/" className="navChandePageEnc">
                  <BsCart2 />
                </a>
                <a href="https://www.youtube.com/" className="navChandePageEnc">
                  <FaRegUserCircle />
                </a>
              </div>
            </div>
            <div className="navbarLinkDesTop2">
              <NavLink
                to="/shop"
                onClick={() => {
                  setButtonIndex(0)
                  setControlCate('')
                  setControlSmallCate('')
                  setControlSmallBody('')
                }}
              >
                <p className="navbarIconLine1">線上購物</p>
              </NavLink>
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
                  src="../../../images/encyclopedia/halfcircle.png"
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
                  src="../../../images/encyclopedia/halfcircle.png"
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
                  src="../../../images/encyclopedia/halfcircle.png"
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
            <NewPush name1="活動專區" name2="相關連結" />
          ) : (
            ''
          )}
        </div>
        <div className={buttonIndex === 3 ? 'buttonAndIconPush' : ''}>
          {buttonIndex === 3 ? (
            <NewPush name1="品牌介紹" name2="門市資訊" />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
