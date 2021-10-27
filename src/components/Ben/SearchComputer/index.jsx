import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function SearchComputer(props) {
  const { searchWord, setSearchWord } = props

  return (
    <div className="search-computer">
      <input
        className="search-input"
        type="text"
        placeholder="請輸入商品名稱"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <Link
        // 有搜索內容就跳轉，沒有就轉到商品列表
        to={
          searchWord
            ? `/prod-list/page/search/${searchWord}/1`
            : '/prod-list/page/1'
        }
      >
        <button className="search-button">
          <img src="http://localhost:3000/images/icon/717122.png" alt="" />
        </button>
      </Link>
    </div>
  )
}

export default SearchComputer
