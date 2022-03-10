import { useReducer} from "react"
import { ContadorReducer } from "../reducer/contadorReducer"
import { contadorinitialState } from "../reducer/contadorReducer"
import { contadorInit } from "../reducer/contadorReducer"

const ContadorMejorado = () =>{

  const [state,dispatch] = useReducer(ContadorReducer,contadorinitialState,contadorInit)


  const sumar = () => dispatch({type:"INCREMENT"})
  const sumar_5 = () => dispatch({type:"INCREMENT_5",paylod:5})
  const restar = () => dispatch({type:"DECREMENT"})
  const restar_5 = () => dispatch({type:"DECREMENT_5",paylod:5})
  const reset = () => dispatch({type:"RESET"})
  
  return(
    <div style={{textAlign:"center"}}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={() => sumar()}>+</button>
        <button onClick={() => restar()}>-</button>
        <button onClick={reset} >0</button>
        <button onClick={() => sumar_5()} >+5</button>
        <button  onClick={() => restar_5()}>-5</button>
      </nav>

      <h3>{state.contador}</h3>
    </div>
  )
}


export  { ContadorMejorado }