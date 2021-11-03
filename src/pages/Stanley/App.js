import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ShoppingCart1 from './shoppingCart-1/index'
import ShoppingCart2 from './shoppingCart-2/index'
import ShoppingCart3 from './shoppingCart-3/index'
import ClientOrderList from './client-order-list/index'
import ClientOrderDetail from './client-order-detail/index'
import ManagerOrderList from './manager-order-list/index'
import ManagerOrderDetail from './managert-order-detail/index'

function App(props) {
  const { productCount, setProductCount } = props
  return (
    <>
      <Switch>
        <Route path="/cart">
          <ShoppingCart1
            productCount={productCount}
            setProductCount={setProductCount}
          />
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
