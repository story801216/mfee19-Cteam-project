import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { hotData } from '../../../../hotData'
import Banner from '../../../../components/ben/Banner'
import MultiLevelBreadcrumb from '../../../../components/ben/MultiLevelBreadcrumb'
import BrowseRecordSlider from '../../../../components/ben/BrowseRecordSlider'
import CategoryIcon from '../../../../components/ben/CategoryIcon'
import CateBodyIcon from '../../../../components/ben/CateBodyIcon'
import HotSilder from '../../../../components/ben/HotSilder'
import SearchComputer from '../../../../components/ben/SearchComputer'
import Search from '../../../../components/ben/Search'
import ProductItem from '../../../../components/ben/ProductItem'
import AsideCate from '../../../../components/ben/AsideCate'
import './index.css'

function ProductsFirstPage(props) {
  const {
    cates,
    bodys,
    cateWord,
    setCateWord,
    locationWord,
    setLocationWord,
    controlCate,
    setControlCate,
    controlSmallCate,
    setControlSmallCate,
    controlSmallBody,
    setControlSmallBody,
    updateBrowseRecordToLocalStorage,
    searchWord,
    setSearchWord,
  } = props

  // 設定熱門商品資料
  const [hotProductData, setHotProductData] = useState([])

  const [controlCateButton, setControlCateButton] = useState(0)

  const [myBrowseRecord, setMyBrowseRecord] = useState([])

  // 資料庫資料
  let [data, setData] = useState([])

  // 商品類別
  const handleCate = () => {
    // connect to node
    // set products state
    if (cateWord !== '') {
      ;(async () => {
        let r = await fetch(
          `http://localhost:3001/product?category=${cateWord}`
        )
        let j = await r.json()
        if (j.totalRows) {
          setData(j)
        }
      })()
    }
  }

  // 依照身體部位
  const handlelocation = () => {
    // connect to node
    // set products state
    if (locationWord !== '') {
      ;(async () => {
        let r = await fetch(
          `http://localhost:3001/product?location=${locationWord}`
        )
        let j = await r.json()
        if (j.totalRows) {
          setData(j)
        }
      })()
    }
  }

  const getBrowseRecordFromLocalStorage = () => {
    const newBrowseRecord = localStorage.getItem('browseRecord') || '[]'

    setMyBrowseRecord(JSON.parse(newBrowseRecord))
  }

  useEffect(() => {
    getBrowseRecordFromLocalStorage()
    setHotProductData(hotData)
  }, [])

  return (
    <>
      <Banner />
      <div className="container">
        <div className="breadcrumb-search">
          <MultiLevelBreadcrumb />
          <SearchComputer
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            setControlCate={setControlCate}
            setControlSmallCate={setControlSmallCate}
            setControlSmallBody={setControlSmallBody}
          />
        </div>
        <div className="productsFirstPage">
          <AsideCate
            cates={cates}
            bodys={bodys}
            handleCate={handleCate}
            setCateWord={setCateWord}
            handlelocation={handlelocation}
            setLocationWord={setLocationWord}
            controlCate={controlCate}
            setControlCate={setControlCate}
            controlSmallCate={controlSmallCate}
            setControlSmallCate={setControlSmallCate}
            controlSmallBody={controlSmallBody}
            setControlSmallBody={setControlSmallBody}
          />
          <div className="main">
            {/* 手機版 主標題 */}
            <div className="main-title">
              <div className="text">
                <p>線上購物</p>
              </div>
              <div className="line"></div>
            </div>
            {/* 手機版搜索框 */}
            <Search
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              setControlCate={setControlCate}
              setControlSmallCate={setControlSmallCate}
              setControlSmallBody={setControlSmallBody}
            />
            {/* 熱門商品 */}
            {/* title */}
            <div className="hot">
              <div className="title">
                <div className="notebook-icon">
                  <img
                    src="http://localhost:3000/images/icon/1011813.png"
                    alt=""
                  />
                </div>
                <div className="circle-icon">
                  <img
                    src="http://localhost:3000/images/icon/3561625.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <p>熱門商品</p>
                </div>
              </div>
            </div>
            {/* 熱門商品輪播 */}
            <HotSilder
              hotProductData={hotProductData}
              updateBrowseRecordToLocalStorage={
                updateBrowseRecordToLocalStorage
              }
            />
            {/* 桌機 類別選擇頁簽 */}
            <div className="cate-button-computer">
              <div className="cate-option">
                <div
                  className={controlCateButton === 0 ? 'now' : ''}
                  onClick={() => {
                    setControlCateButton(0)
                  }}
                >
                  商品類別
                </div>
              </div>
              <div className="body-option">
                <div
                  className={controlCateButton === 1 ? 'now' : ''}
                  onClick={() => {
                    setControlCateButton(1)
                  }}
                >
                  依照身體部位
                </div>
              </div>
            </div>
            {/* 手機 類別選擇按鈕 */}
            <div className="cate-button">
              <div
                className={controlCateButton === 0 ? 'cate now' : 'cate'}
                onClick={() => {
                  setControlCateButton(0)
                }}
              >
                商品類別
              </div>
              <div
                className={controlCateButton === 1 ? 'body now' : 'body'}
                onClick={() => {
                  setControlCateButton(1)
                }}
              >
                依照身體部位
              </div>
            </div>
            <div className="category-show-area">
              {/* 類別icon */}
              <div
                className={
                  controlCateButton === 0
                    ? 'item-group-cate now'
                    : 'item-group-cate'
                }
              >
                {/* 全部商品 */}
                <Link
                  to={'/prod-list/page/1'}
                  onClick={() => {
                    setControlCate(0)
                    setControlSmallCate('全部商品')
                    setControlSmallBody('')
                  }}
                >
                  <div className="item">
                    <div className="icon">
                      <img
                        src="http://localhost:3000/images/icon/1562055.png"
                        alt=""
                      />
                    </div>
                    <div className="name">全部商品</div>
                    <div className="arrow">
                      <img
                        src="http://localhost:3000/images/arrow/blueArrow.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                {/* 商品種類 */}
                {cates.map((v, i) => {
                  return (
                    <CategoryIcon
                      key={i}
                      id={i}
                      path={v.path}
                      name={v.name}
                      handleCate={handleCate}
                      setCateWord={setCateWord}
                      setControlCate={setControlCate}
                      setControlSmallCate={setControlSmallCate}
                      setControlSmallBody={setControlSmallBody}
                    />
                  )
                })}
              </div>
              {/* 身體icon */}
              <div
                className={
                  controlCateButton === 1
                    ? 'item-group-body now'
                    : 'item-group-body'
                }
              >
                {bodys.map((v, i) => {
                  return (
                    <CateBodyIcon
                      key={i}
                      id={i}
                      path={v.path}
                      name={v.name}
                      english={v.english}
                      handlelocation={handlelocation}
                      setLocationWord={setLocationWord}
                      setControlSmallBody={setControlSmallBody}
                      setControlCate={setControlCate}
                      setControlSmallCate={setLocationWord}
                    />
                  )
                })}
              </div>
            </div>
            {/* 瀏覽過的商品 */}
            {/* 手機輪播 */}
            <BrowseRecordSlider myBrowseRecord={myBrowseRecord} />
            {/* 桌機 */}
            <div className="browse-record-item-group">
              {myBrowseRecord
                ? myBrowseRecord
                    .slice(0)
                    .reverse()
                    .map((product) => {
                      return (
                        <Link
                          key={product.sid}
                          to={'/prod-list/prod/' + product.sid}
                        >
                          <ProductItem {...product} />
                        </Link>
                      )
                    })
                : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsFirstPage
