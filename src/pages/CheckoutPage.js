import React from 'react'
import styled from 'styled-components'
import { PageHero, PaymentForm } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
    <PageHero title="payment"/>
    <Wrapper className='page'></Wrapper>
    <h1>check out here</h1>
    <PaymentForm/>
  </main>
}
const Wrapper = styled.div``     
export default CheckoutPage
