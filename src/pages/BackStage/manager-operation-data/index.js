import React, { useEffect, useState } from 'react'
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

  // 計算商品銷量排行
  // purchasedList.forEach(()=>{

  // })
  return (
    <>
      <div className="container">
        <div className="row">
          {/* 營業額圖表 */}
          <div className="col-8">
            {/* datalist是orderDate DESC排序，後續需要 */}
            <LineChart datalist={datalist.reverse()} />
          </div>
          {/* 商品銷量排行表 */}
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}

export default App
