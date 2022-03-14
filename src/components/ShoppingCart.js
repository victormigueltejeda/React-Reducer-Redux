import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducer/ShoppingReducer"
import ProductItem from "./ProductItem"
import {CartItem} from "../components/CartItem"
import "../index.css"
import { Types } from "../action/ShoppingAction"


const ShoppingCard = () =>{

  const [state,dispatch] = useReducer(shoppingReducer,shoppingInitialState)
  const {products,cart} = state

  const addToCart = (id) =>{
    dispatch({type:Types.ADD_TO_CART,payload:id})
  }

  const delFromCart = (id) =>{}
  const clearCart = () =>{}

  return(
    <div>
      <h2>Carrito de Compras</h2>

      <h3>Productos</h3>
      <article className="box grid-resposive">
        {products.map((product) => <ProductItem key={product.id}  data={product} addToCart={addToCart}/>)}
        
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart}/>))
        }
      </article>
    </div>
  )
}


export default ShoppingCard