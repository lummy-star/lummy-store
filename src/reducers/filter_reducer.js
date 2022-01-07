import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

//  CODE FOR AUTOFILL AND PRICE RANGE
const filter_reducer = (state, action) => {
  if (action.type=== LOAD_PRODUCTS) {
     let maxPrice = action.payload.map((p)=>p.price)
     maxPrice = Math.max(...maxPrice)
    return {...state, 
       all_products:[...action.payload],
        filtered_products: [...action.payload],
      filters:{...state.filters, max_price: maxPrice, price: maxPrice}
      }
  }
  //  END OF AUTOFILL AND PRICE RANGE

          //   CODE FOR PRODUCTS VIEW
  if (action.type === SET_GRIDVIEW) {
    return {...state, grid_view:true}
  }

  if (action.type === SET_LISTVIEW) {
    return {...state, grid_view:false}
  }
    //   END OF CODE FOR PRODUCTS VIEW

    //  CODE FOR SORTING
  if (action.type === UPDATE_SORT) {
    return {...state, sort:action.payload}
  }
  if (action.type === SORT_PRODUCTS) {
    const {sort, filtered_products} = state;
    let tempProducts = [...filtered_products]
  //   END OF CODE FOR SORTING

     //  CODE SORTING BY PRICE AND ASECENDING AND DESCENDING ORDER
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b)=> a.price - b.price)
    }

      if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b)=> b.price - a.price)
    }

    if (sort === 'name-a') {
       tempProducts = tempProducts.sort((a, b)=>{
          return a.name.localeCompare(b.name)
       })
    }

    if (sort === 'name-z') {
       tempProducts = tempProducts.sort((a, b)=>{
          return b.name.localeCompare(a.name)
       })

    }
    
       return {...state,filtered_products:tempProducts}
  }
     //  CODE SORTING BY PRICE AND ASECENDING AND DESCENDING ORDER 
  if (action.type === UPDATE_FILTERS) {
       const{name, value} = action.payload
       return {...state, filters:{...state.filters,[name]: value}}
    }
          // AUTOCOMPLETE CODE AND FILTERING ALL PRODUCTS ON SEARCH FORM//
     if (action.type === FILTER_PRODUCTS) {
       const {all_products} = state
       const {text, category, company, color, price, shipping}=state.filters

       let tempProducts = [...all_products]
       // filtering
       //  by text
       if (text) {
         tempProducts = tempProducts.filter((product)=>{
       return product.nametoLowerCase().startsWith(text)
         })
       }

      //    start of filtering  BY CATEGORY
       if (category !=='all') {
         tempProducts = tempProducts.filter((product)=>{
        return product.category === category
         })
       }
      // END OF filtering BY CATEGORY

      // start of filter by company
       if (company !=='all') {
         tempProducts = tempProducts.filter((product)=>{
        return product.company === company
         })
       }
      // end of filter by company

      // start  filtering by color
       if (color !=='all') {
         tempProducts = tempProducts.filter((product)=>{
        return product.colors.find((c)=> c === color)
         })
       }
      //  end filtering by color

      // start filtering by shipping
      if (shipping) {
        tempProducts = tempProducts.filter((product)=>{
             return product.shipping ===true
        })
        
      }
    // start of filter by price
      tempProducts = tempProducts.filter((product)=>{
    return product.price <= price
      })
     // end of filter by price

        return { ...state, filtered_products: tempProducts }
     }
  //  end filtering by shipping
  
 
    //  END OF AUTOCOMPLETE CODE AND FILTERING ALL PRODUCTS ON SEARCH FORM

    // CLEAR FILTER CODE 
 if (action.type === CLEAR_FILTERS) {
   return {...state, 
    filters:{
      ...state.filters,
   text: '',
   company: 'all',
   category: 'all',
   color: 'all',
   price: state.filters.max_price,
   shipping: false
  },
  }
 }
//   END OF CLEAR FILTER CODE 
// THE REASON FOR MAKING PRICE STATE.FILTERS.MAX_PRICE IS SO AS NOT TO ALLOW THE PRICE BEEN CLEARED 

  throw new Error(`No Matching "${action.type}" - action type`)

}
export default filter_reducer;

//  YOU MAKE SURE YOU EXPORT THE REDUCER TO THE CONTEXT