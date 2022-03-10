import { useReducer} from "react"

const initialState = {contador:0}

const init = (initialState) => {
  return{
    contador:initialState.contador + 100,
  }
}

const TYPES = {
  INCREMENT:"INCREMENT",
  DECREMENT:"DECREMENT",
  INCREMENT_5:"INCREMENT_5",
  DECREMENT_5:"DECREMENT_5",
  RESET:"RESET"
}


function reducer(state,action){
  switch(action.type){
    case TYPES.INCREMENT:
      return{contador:state.contador + 1}
    case TYPES.DECREMENT:
      return {contador:state.contador - 1} 
    case TYPES.INCREMENT_5:
      return {contador:state.contador + action.paylod}
    case TYPES.DECREMENT_5:
      return{contador:state.contador - action.paylod}
    case TYPES.RESET:
      return initialState
    default:
      return state 
  }
}

const Contador = () =>{

  const [state,dispatch] = useReducer(reducer,initialState,init)


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


export  { Contador }