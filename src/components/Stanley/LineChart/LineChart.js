import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import dayjs, { weekday } from 'dayjs'

function LineChart(props) {
  
  const { datalist } = props
  const data = {
    // 最近的七天
    labels: ['1', '2', '3', '4', '5', '6', '7'], ///每個禮拜的營業額
    datasets: [
      {
        label: '# of Votes',
        data: datalist.map((v) => {
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
          <h1 className="title">每周營業額</h1>
        </div>
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default LineChart
