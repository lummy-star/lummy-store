import React from 'react'
import styled from 'styled-components'
import { PageHero, PaymentForm } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
    <PageHero title="payment"/>
    <Wrapper className='page'>
       <PaymentForm/>
    </Wrapper>
  </main>
}
const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }

`     
export default CheckoutPage
