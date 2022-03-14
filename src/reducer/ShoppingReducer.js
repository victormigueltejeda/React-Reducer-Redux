import { Types } from "../action/ShoppingAction";

export const shoppingInitialState = {
  products:[
    {id:1,name:"Producto1",price:100},
    {id:2,name:"Producto2",price:200},
    {id:3,name:"Producto3",price:300},
    {id:4,name:"Producto4",price:400},
    {id:5,name:"Producto5",price:500},
    {id:6,name:"Producto6",price:600},
  ],
  cart:[]
}

export function shoppingReducer(state,action){
  switch(action.type){
    case Types.ADD_TO_CART:{
      let newItem = state.products.find(product => product.id === action.payload)
      let intemInCart = state.cart.find(item => item.id === newItem.id)
      
      return intemInCart ? {...state,cart:state.cart.map(item => item.id === newItem.id ? {...item,quantity:item.quantity + 1} : item)} : {...state,cart:[...state.cart,{...newItem,quantity:1}]}

    }break
    case Types.REMOVE_ONE_FROM_CART:{

    }break
    case Types.REMOVE_ALL_FROM_CART:{

    }break
    case Types.CLEAR_CART:{

    }break
    default:
      return state
  }
}