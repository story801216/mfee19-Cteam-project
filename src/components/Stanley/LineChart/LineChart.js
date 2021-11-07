import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

function LineChart(props) {
  const { datalist } = props

  // 最近7天的日期
  let last7days = []
  for (let i = 1; i <= 7; i++) {
    const date = moment()
      .subtract(7 - i, 'days')
      .format('MM/DD')
    last7days.push(date)
  }

  const turnoverData = datalist.filter((v) => {
    return last7days.includes(v.orderDate)
  })

  console.log(turnoverData)
  const data = {
    // 最近的七天
    labels: last7days,
    // 裡面的data
    datasets: [
      {
        label: '金額',
        data: turnoverData.map((v)=>{
          return v.turnover
        }),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">每日營業額</h1>
        </div>
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default LineChart
