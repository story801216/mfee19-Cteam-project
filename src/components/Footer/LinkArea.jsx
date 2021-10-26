import React from 'react'
import { Link } from 'react-router-dom'

function LinkArea(props) {
  const { setControlCate, setControlSmallCate, setControlSmallBody } = props
  // const topLink = [
  //   {
  //     theClass: 'login',
  //     one: '會員註冊',
  //     two: '會員登入',
  //     three: '處方簽查詢',
  //   },
  //   {
  //     theClass: 'shop',
  //     one: '線上購物',
  //     two: '商品分類',
  //     three: '依身體部位',
  //     four: '訂單查詢',
  //   },
  //   {
  //     theClass: 'health-knowledge',
  //     one: '保健知識',
  //     two: '保健百科',
  //     three: '症狀篩檢',
  //     four: '醫院|藥局',
  //   },
  //   {
  //     theClass: 'latest-news d-none d-lg-block',
  //     one: '最新消息',
  //     two: '活動專區',
  //     three: '相關連結',
  //   },
  //   {
  //     theClass: 'contact d-none d-lg-block',
  //     one: '聯絡我們',
  //     two: '品牌介紹',
  //     three: '最新消息',
  //     four: '門市資訊',
  //   },
  // ]
  // const bottomLink = [
  //   {
  //     theClass: 'latest-news',
  //     one: '最新消息',
  //     two: '活動專區',
  //     three: '相關連結',
  //   },
  //   {
  //     theClass: 'contact',
  //     one: '聯絡我們',
  //     two: '品牌介紹',
  //     three: '最新消息',
  //     four: '門市資訊',
  //   },
  // ]

  return (
    <>
      {/* 站內連結 */}
      <div className="link-area">
        <div className="top">
          <div className="login">
            <p>
              <a href="#/">會員註冊</a>
            </p>
            <p>
              <a href="#/">會員登入</a>
            </p>
            <p>
              <a href="#/">處方簽查詢</a>
            </p>
          </div>
          <div className="shop">
            <p>
              <Link to={'/shop'}>線上購物</Link>
            </p>
            <p>
              <Link
                to={'/prod-list/page/1'}
                onClick={() => {
                  setControlCate(0)
                  setControlSmallCate('全部商品')
                  setControlSmallBody('')
                }}
              >
                商品分類
              </Link>
            </p>
            <p>
              <Link
                to={'/prod-list/page/categories/頭部/1'}
                onClick={() => {
                  setControlSmallBody(0)
                  setControlCate(1)
                  setControlSmallCate('')
                }}
              >
                依身體部位
              </Link>
            </p>
            <p>
              <a href="#/">訂單查詢</a>
            </p>
          </div>
          <div className="health-knowledge">
            <p>
              <a href="#/">保健知識</a>
            </p>
            <p>
              <a href="#/">保健百科</a>
            </p>
            <p>
              <a href="#/">症狀篩檢</a>
            </p>
            <p>
              <a href="#/">醫院|藥局</a>
            </p>
          </div>
          <div className="latest-news d-none d-lg-block">
            <p>
              <a href="#/">最新消息</a>
            </p>
            <p>
              <a href="#/">活動專區</a>
            </p>
            <p>
              <a href="#/">相關連結</a>
            </p>
          </div>
          <div className="contact d-none d-lg-block">
            <p>
              <a href="#/">聯絡我們</a>
            </p>
            <p>
              <a href="#/">品牌介紹</a>
            </p>
            <p>
              <a href="#/">最新消息</a>
            </p>
            <p>
              <a href="#/">門市資訊</a>
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="latest-news">
            <p>
              <a href="#/">最新消息</a>
            </p>
            <p>
              <a href="#/">活動專區</a>
            </p>
            <p>
              <a href="#/">相關連結</a>
            </p>
          </div>
          <div className="contact">
            <p>
              <a href="#/">聯絡我們</a>
            </p>
            <p>
              <a href="#/">品牌介紹</a>
            </p>
            <p>
              <a href="#/">最新消息</a>
            </p>
            <p>
              <a href="#/">門市資訊</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LinkArea
