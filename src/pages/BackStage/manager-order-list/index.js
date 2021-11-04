import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { AiFillFileExcel, AiFillDelete } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import ManagerOrderList from '../../../components/Stanley/ManagerOrderList/ManagerOrderList'
// import BackendBookMark from '../../components/BackendBookMark/BackendBookMark'

function App() {
  const [orderlist, setOrderlist] = useState([])

  // componentdidMount：讀取訂單資訊
  useEffect(() => {
    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(`http://localhost:3001/cart/`)
      // data 是回傳的自動命名 (不太確定)
      setOrderlist(r.data)
    }
    getInfo()
  }, [])

  // orderlist.map((v, i) => {
  //   return console.log(v.order_note)
  // })
  return (
    <>
      <div className="MOL">
        <div className="container">
          {/* 後台頁簽 */}
          {/* <BackendBookMark /> */}

          {/* 訂單操作按鈕 */}
          <div className="list-contral-box">
            <div className="row">
              <div className="col-xl-6 col-12 order-xl-0 order-1">
                <div className="icon-group">
                  <AiFillFileExcel className="icon excel" />
                  <span className="d-xl-inline-block d-none">
                    匯出訂單 &nbsp;
                  </span>
                  <AiFillDelete className="icon delete" />
                  <span className="d-xl-inline-block d-none">
                    刪除訂單 &nbsp;
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="row">
                  <div className="col-xl-8 col-12">
                    <div className="search-computer ">
                      <input
                        className="search-input"
                        type="text"
                        placeholder="請輸入訂單編號"
                      />
                      <button className="search-button">
                        <BsSearch />
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    <select className="select-order">
                      <option value="">訂單處理中</option>
                      <option value="">已出貨</option>
                      <option value="">運送中</option>
                      <option value="">訂單完成</option>
                      <option value="">全部</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 後台訂單列 */}
          <div className="field-content-box">
            <div className="field-title d-xl-block d-none">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-2">訂單編號</div>
                    <div className="col-2">訂單日期</div>
                    <div className="col-2">訂購人</div>
                    <div className="col-2">訂單總額</div>
                    <div className="col-2">付款狀態</div>
                    <div className="col-2">訂單狀態</div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            {orderlist.map((v, i) => {
              return (
                <ManagerOrderList
                  sid={v.sid}
                  member_name={v.member_name}
                  amount={v.amount}
                  order_date={v.order_date}
                  order_status={v.order_status}
                />
              )
            })}
            {/* <ManagerOrderList orderlist={orderlist} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
