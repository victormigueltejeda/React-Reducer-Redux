import { TYPES } from "../action/contadorAction"

export const contadorinitialState = {contador:0}

export const contadorInit = (initialState) => {
  return{
    contador:initialState.contador + 100,
  }
}


export function ContadorReducer(state,action){
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
      return contadorinitialState
    default:
      return state 
  }
}