import React from 'react'
import './Checkline2.css'
function Checkline2(props) {
  // 三個階段的狀態變數
  const { state } = props
  return (
    <>
      {/* checkline 進度條 */}
      <div className="checkline-box d-flex justify-content-center">
        <div className="checkline-item">
          <div className="checkline-circle-1">1</div>
          <div className="row justify-content-center">訂單處理中</div>
        </div>
        <div className="checkline-line"></div>
        <div className="checkline-item">
          <div className="checkline-circle-2">2</div>
          <div className="row justify-content-center">已出貨</div>
        </div>
        <div className="checkline-line"></div>
        <div className="checkline-item">
          <div className="checkline-circle-2">3</div>
          <div className="row justify-content-center">運送中</div>
        </div>
        <div className="checkline-line"></div>
        <div className="checkline-item">
          <div className="checkline-circle-2">4</div>
          <div className="row justify-content-center">訂單完成</div>
        </div>
      </div>
    </>
  )
}

export default Checkline2
