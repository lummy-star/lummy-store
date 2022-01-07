import React, { Fragment } from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import Loading from './Loading'

const ProductList = () => {
  const { filtered_products: products, grid_view} = 
  useFilterContext()

  if (products && products.length < 1) {
     <h5 style={{textTransform: 'none'}}>
      Sorry, no products match your search...
    </h5>
  } 
  // else   {
  // return (
  //   <Loading/>
  //  )

  // }

  

  if (grid_view === false) {
     return <ListView products={products}/>
  }
  return (
  
  <GridView products={products}>product list</GridView>
  
  )
}

export default ProductList
