import React from 'react'
import './index.scss'
import Cart2 from '../../../components/Stanley/Cart2/Cart2'
import ClientOrderDetail from '../../../components/Stanley/ClientOrderDetail/ClientOrderDetail'

function App() {
  return (
    <>
      <div className="COD">
        <div className="container">
          {/* <Cart2 productData={productData} /> */}
          <ClientOrderDetail />
        </div>
      </div>
    </>
  )
}

export default App
