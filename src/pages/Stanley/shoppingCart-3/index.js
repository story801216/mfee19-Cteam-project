import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'
import axios from 'axios'
import { FaCheckCircle } from 'react-icons/fa'
import Checkline from '../../../components/Stanley/Checkline/Checkline'
import Cart3 from '../../../components/Stanley/Cart3/Cart3'
import ClientOrderDetail from '../../../components/Stanley/ClientOrderDetail/ClientOrderDetail'

function App(props) {
  const state = [1, 1, 1]
  const [orderInfo, setOrderInfo] = useState('')
  window.scrollTo(0, 0)

  // 測試用
  console.log(props)
  const order_sid = props.match.params.order_sid

  // componentdidMount：讀取完成的訂單資訊
  useEffect(() => {
    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(`http://localhost:3001/cart/${order_sid}`)
      console.log(r)
      // data 是回傳的自動命名 (不太確定)
      setOrderInfo(r.data)
    }
    getInfo()
  }, [])

  return (
    <>
      <div className="SC3">
        <div className="container">
          {/* checkline 進度條 */}
          <Checkline state={state} />

          {/*  完成訂單文字  */}
          <div class="finished-word text-center">
            <FaCheckCircle className="finished-icon" />
            訂單送出成功 <br />
            可至
            <a href="/order-list">會員中心</a>
            查看歷史訂單資訊，或<a href="">繼續購物</a>
          </div>

          {/* cart購物車 */}
          <Cart3 orderInfo={orderInfo} />

          <ClientOrderDetail
            order_list={orderInfo.order_list ? orderInfo.order_list[0] : ''}
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(App)
