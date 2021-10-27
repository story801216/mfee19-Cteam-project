import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function SearchComputerBackStage(props) {
  const { backStageSearchWord, setBackStageSearchWord } = props

  return (
    <div className="search-computer">
      <input
        className="search-input"
        type="text"
        placeholder="請輸入商品名稱"
        value={backStageSearchWord}
        onChange={(e) => {
          setBackStageSearchWord(e.target.value)
        }}
      />
      <Link
        // 有搜索內容就跳轉，沒有就轉到商品列表
        to={
          backStageSearchWord
            ? `/back-stage/products/page/search/${backStageSearchWord}/1`
            : '/back-stage/products/page/1'
        }
      >
        <button className="search-button">
          <img src="http://localhost:3000/images/icon/717122.png" alt="" />
        </button>
      </Link>
    </div>
  )
}

export default SearchComputerBackStage
