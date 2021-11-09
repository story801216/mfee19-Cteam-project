import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import LineChart from '../../../components/Stanley/LineChart/LineChart'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function App() {
  const [isLoading, setIsloading] = useState(true)
  const [orderlist, setOrderlist] = useState([])
  const [purchasedList, setPurchasedList] = useState([])
  const [count, setCount] = useState(1)
  // componentdidMount：讀取訂單資訊
  useEffect(() => {
    setIsloading(true)

    // fetch 最新一筆資料
    const getInfo = async () => {
      const r = await axios.get(`http://localhost:3001/cart/`)
      const r2 = await axios.get(
        'http://localhost:3001/cart/purchased-product/all'
      )
      // data 是回傳的自動命名
      setOrderlist(r.data)
      setPurchasedList(r2.data)
      // 拿到
      setTimeout(() => {
        setIsloading(false)
      }, 700)
    }
    getInfo()
  }, [])

  // 計算營業額
  let datalist = []
  let dataobj = {}

  // 計算每日營業額
  orderlist.forEach((el) => {
    // 判斷這筆訂單的日期
    const orderDate = el.order_date.slice(5, 10).split('-').join('/')
    // 如果此日期沒有在obj裡面，就建立一個
    if (!dataobj[orderDate]) {
      const item = {
        orderDate: orderDate,
        turnover: el.amount,
      }
      dataobj[orderDate] = item
      datalist.push(item)
    } else {
      dataobj[orderDate].turnover += el.amount
    }
  })

  // 計算商品銷量加總
  let saleslist = []
  let salesobj = {}

  purchasedList.forEach((el) => {
    if (!salesobj[el.product_id]) {
      const item = {
        product_id: el.product_id,
        Name: el.Name,
        quantity: el.quantity,
      }
      salesobj[el.product_id] = item
      saleslist.push(item)
    } else {
      salesobj[el.product_id].quantity += el.quantity
    }
  })

  // 銷量進行排序(大->小)
  saleslist.sort(function (a, b) {
    if (a.quantity < b.quantity) {
      return 1
    }
    if (a.quantity > b.quantity) {
      return -1
    }
    return 0
  })

  // 銷量的前10名
  let Top10list = []
  for (let i = 0; i < saleslist.length; i++) {
    if (i >= 10) {
      break
    }
    Top10list.push(saleslist[i])
  }

  // spinner動畫
  const spinner = (
    <Spinner animation="grow" variant="primary" className="spinner" />
  )

  return (
    <>
      <div className="container">
        {isLoading ? (
          spinner
        ) : (
          <div className="row">
            {/* 營業額圖表 */}
            <div className="col-xl-8 col-12">
              <div className="line-chart">
                {/* datalist是orderDate DESC排序，後續需要 */}
                <LineChart datalist={datalist.reverse()} count={count} />
                <div className="control-arrow">
                  <AiOutlineArrowLeft
                    onClick={() => {
                      setCount(count + 1)
                    }}
                    className="pointer"
                  />
                  <AiOutlineArrowRight
                    onClick={() => {
                      setCount(count - 1)
                    }}
                    className="ml-3 pointer"
                  />
                </div>
              </div>
            </div>

            {/* 商品銷量排行表 */}
            <div className="col-xl-4 col-12">
              <h1 className="chart-title">熱銷商品排行</h1>
              <div className="product-sales-box">
                <div className="title">
                  <div className="row">
                    <div className="col-2">排行</div>
                    <div className="col-7">品項</div>
                    <div className="col-3 text-right">銷量</div>
                  </div>
                </div>
                <div className="content-box">
                  {/* 銷量內容 */}
                  {Top10list.map((v, i) => {
                    return (
                      <>
                        <div className="content">
                          <div className="row mb-1">
                            <div className="col-2">{i + 1}</div>
                            <div className="col-7">{v.Name}</div>
                            <div className="col-3 text-right">{v.quantity}</div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
