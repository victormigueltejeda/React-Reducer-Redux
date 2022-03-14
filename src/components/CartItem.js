export const CartItem = ({data,delFonmCart}) =>{
  let {id,name,price} = data
  return(
    <div style={{borderBottom:"this solid gray"}}>
      {}
      <h4>{name}</h4>
      <h5>$ {price}.00</h5>
      <button onClick={() => delFonmCart(id)}>Eliminar Uno</button>
      <button onClick={() => delFonmCart(id)}>Eliminar Todo</button>
    </div>
  )
}