import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ShoppingCart1 from './shoppingCart-1/App'
import ShoppingCart2 from './shoppingCart-2/App'
import ShoppingCart3 from './shoppingCart-3/App'
import ClientOrderList from './client-order-list/App'
import ClientOrderDetail from './client-order-detail/App'
import ManagerOrderList from './manager-order-list/App'
import ManagerOrderDetail from './managert-order-detail/App'

function App() {
  return (
    <>
      <Switch>
        <Route path="/cart">
          <ShoppingCart1 />
        </Route>
        <Route path="/checkout">
          <ShoppingCart2 />
        </Route>
        <Route path="/order-check/:order_sid?">
          <ShoppingCart3 />
        </Route>
        <Route path="/order-list/:id?">
          <ClientOrderList />
        </Route>
        <Route path="/order-detail">
          <ClientOrderDetail />
        </Route>
        <Route path="/admin/order-list">
          <ManagerOrderList />
        </Route>
        <Route path="/admin/order-detail/:order_sid?">
          <ManagerOrderDetail />
        </Route>
      </Switch>
    </>
  )
}

export default App
