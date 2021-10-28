import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
// 頁面元件
// 所有商品頁面
import ProductsAllPage from './pages/ben/ProductsAllPage'
// 後台頁面
import BackStage from './pages/BackStage'
// 共用元件
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/Navbar/Navbar'
import MobileNavBar from './components/MobileNavBar'
import BottomNavBar from './components/BottomNavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  // navbar 商品類別欄顏色切換
  const [controlCate, setControlCate] = useState('')
  const [controlSmallCate, setControlSmallCate] = useState('')
  const [controlSmallBody, setControlSmallBody] = useState('')

  return (
    <Router>
      <>
        <NavLink to="/back-stage/products/page/1">後臺管理</NavLink>

        <Navbar
          setControlCate={setControlCate}
          setControlSmallCate={setControlSmallCate}
          setControlSmallBody={setControlSmallBody}
        />
        <MobileNavBar />
        {/* <ScrollToTop> */}
        <Switch>
          <MainContent>
            {/* 所有商品頁面 */}
            <ProductsAllPage
              controlCate={controlCate}
              controlSmallCate={controlSmallCate}
              controlSmallBody={controlSmallBody}
              setControlCate={setControlCate}
              setControlSmallCate={setControlSmallCate}
              setControlSmallBody={setControlSmallBody}
            />
            <BackStage />
          </MainContent>
        </Switch>
        {/* </ScrollToTop> */}
        <BottomNavBar />
        <Footer
          setControlCate={setControlCate}
          setControlSmallCate={setControlSmallCate}
          setControlSmallBody={setControlSmallBody}
        />
      </>
    </Router>
  )
}

export default App
