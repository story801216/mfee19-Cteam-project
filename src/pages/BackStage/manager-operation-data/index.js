import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import LineChart from '../../../components/Stanley/LineChart/LineChart'

function App() {
  const [isLoading, setIsloading] = useState(true)
  const [orderlist, setOrderlist] = useState([])
  const [purchasedList, setPurchasedList] = useState([])
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
      }, 500)
    }
    getInfo()
  }, [])

  console.log(purchasedList)
  let datalist = []
  let dataobj = {}

  // 計算每天個別的營業額
  orderlist.forEach((el) => {
    // 判斷這筆訂單的日期
    const orderDate = el.order_date.slice(5, 10).split('-').join('/')
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

  let saleslist = []
  let salesobj = {}
  // 計算商品銷量排行
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

  // 把銷量進行排序
  saleslist.sort(function (a, b) {
    if (a.quantity < b.quantity) {
      return 1
    }
    if (a.quantity > b.quantity) {
      return -1
    }
    return 0
  })
  console.log(saleslist)
  return (
    <>
      <div className="container">
        <div className="row">
          {/* 營業額圖表 */}
          <div className="col-xl-8 col-12">
            {/* datalist是orderDate DESC排序，後續需要 */}
            <LineChart datalist={datalist.reverse()} />
          </div>
          {/* 商品銷量排行表 */}
          <div className="col-xl-4 col-12">
            <div className="product-sales-box">
              <div className="title">
                <div className="row">
                  <div className="col-2">排行</div>
                  <div className="col-7">品項</div>
                  <div className="col-3">銷量</div>
                </div>
              </div>
              <div className="content">
              {/* {saleslist.map((v,i)=>{

              })} */}
                <div className="row mb-4">
                  <div className="col-2">1</div>
                  <div className="col-7">保佳兆UCII複合錠60PC</div>
                  <div className="col-3">100000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
