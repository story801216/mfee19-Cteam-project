import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/Navbar/Navbar'
import MobileNavBar from './components/MobileNavBar'
import BottomNavBar from './components/BottomNavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <MobileNavBar />
        {/* <ScrollToTop> */}
        <Switch>
          <Route></Route>
        </Switch>
        {/* </ScrollToTop> */}
        <BottomNavBar />
        <Footer />
      </>
    </Router>
  )
}

export default App
