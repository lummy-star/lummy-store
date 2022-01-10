import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Hero,  CartContent,  StripeCheckout,  Contact,  ProductList,  Product } from './components'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import SingleProductPage from './pages/SingleProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper'
import CheckoutPage from './pages/CheckoutPage'


function App() {
  
  return(
    <AuthWrapper>
    <Router>
     <Navbar/>
      <Sidebar/>
      <Switch>
     <Route exact path ='/'>
       <HomePage/>
     </Route>

     <Route  path ='/about'>
       <AboutPage/>
     </Route>

     <Route  path ='/cart'>
       <CartPage/>
     </Route>

     <Route path='/products/:id'>
       <SingleProductPage /> 
     </Route>

     <Route  path ='/products'>
       <ProductsPage/>
     </Route>
       

     <PrivateRoute  path ='/checkout'>
       <CheckoutPage/>
     </PrivateRoute>

     <Route path ='*'>
       <ErrorPage/>
     </Route>

      {/* <Route  path ='/checkout'>
       <StripeCheckout/>
     </Route>  */}
      
      </Switch>
      <Footer/>
    </Router>
    </AuthWrapper>
   
  ) 
 
}

export default App
