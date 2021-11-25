import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import './index.css'

function CateNav(props) {
  const {
    cates,
    bodys,
    controlCate,
    setControlCate,
    controlSmallCate,
    setControlSmallCate,
    controlSmallBody,
    setControlSmallBody,
    handleCate,
    setCateWord,
    handlelocation,
    setLocationWord,
  } = props

  // 用js控制高度
  /*// 獲取ul
  const cateRef = useRef()
  const bodyRef = useRef()

  // ul高度狀態
  const [cateHeight, setCateHeight] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)

  useEffect(() => {
    // 獲取ul高度
    const cateH = cateRef.current.scrollHeight
    const bodyH = bodyRef.current.scrollHeight

    // 設定ul高度狀態
    setCateHeight(cateH)
    setBodyHeight(bodyH)

    // 預設
    cateRef.current.style.height = 0
    bodyRef.current.style.height = 0
  }, [cateHeight, bodyHeight])

  const cateHandleShow = () => {
    let catelh = parseInt(cateRef.current.style.height)

    console.log(catelh)

    if (catelh === 0) {
      cateRef.current.style.height = cateHeight + 'px'
      bodyRef.current.style.height = 0
      setControlCate(0)
    } else {
      cateRef.current.style.height = 0
      bodyRef.current.style.height = 0
      setControlCate('')
    }
  }
  const bodyHandleShow = () => {
    let bodylh = parseInt(bodyRef.current.style.height)

    console.log(bodylh)

    if (bodylh === 0) {
      bodyRef.current.style.height = bodyHeight + 'px'
      cateRef.current.style.height = 0
      setControlCate(1)
    } else {
      bodyRef.current.style.height = 0
      cateRef.current.style.height = 0
      setControlCate('')
    }
  }*/

  return (
    <div className="cate-nav">
      {/* 藍色標題 */}
      <div className="blue-title">
        <div className="text">
          <p>線上購物</p>
        </div>
      </div>
      {/* 類別區 */}
      <div className="cate">
        {/* 小標題 */}
        <div className="title">
          <div
            onClick={() => {
              controlCate === 0 ? setControlCate('') : setControlCate(0)
            }}
          >
            <div className={controlCate === 0 ? 'text now' : 'text'}>
              商品類別
            </div>
            <div className="arrow">
              <IoIosArrowDown
                className={controlCate === 0 ? 'right now' : 'right'}
              />
            </div>
          </div>
        </div>
        {/* 內容 */}
        <ul className={controlCate === 0 ? 'content now' : 'content'}>
          <li
            onClick={() => {
              setControlCate(0)
              setControlSmallCate('全部商品')
              setControlSmallBody('')
              setCateWord('')
            }}
          >
            <Link
              to={'/prod-list/page/1'}
              className={controlSmallCate === '全部商品' ? 'now' : ''}
              onClick={handleCate}
            >
              全部商品
            </Link>
          </li>
          {cates.map((v, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setControlCate(0)
                  setControlSmallCate(i)
                  setControlSmallBody('')
                  setCateWord(v.name)
                }}
              >
                <Link
                  to={'/prod-list/page/categories/' + v.name + '/' + 1}
                  className={controlSmallCate === i ? 'now' : ''}
                  // onClick={handleCate}
                >
                  {v.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
      {/* 身體區 */}
      <div className="body">
        {/* 小標題 */}
        <div className="title">
          <div
            onClick={() => {
              controlCate === 1 ? setControlCate('') : setControlCate(1)
            }}
          >
            <div className={controlCate === 1 ? 'text now' : 'text'}>
              依照身體部位
            </div>
            <div className="arrow">
              <IoIosArrowDown
                className={controlCate === 1 ? 'right now' : 'right'}
              />
            </div>
          </div>
        </div>
        {/* 內容 */}
        <ul className={controlCate === 1 ? 'content now' : 'content'}>
          {bodys.map((v, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setControlSmallBody(i)
                  setControlCate(1)
                  setControlSmallCate('')
                  setLocationWord(v.name)
                }}
              >
                <Link
                  to={'/prod-list/page/categories/' + v.name + '/' + 1}
                  className={controlSmallBody === i ? 'now' : ''}
                  // onClick={handlelocation}
                >
                  {v.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* 分隔線 */}
      <div className="line"></div>
    </div>
  )
}

export default withRouter(CateNav)
