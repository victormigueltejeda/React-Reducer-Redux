const initialState ={
  value:"",
  error:false,
  loading:false,
  deleted:false,
}

//reducer con condicinales if
const reducerif = (state,action) =>{
  if(action.type === "ERROR"){
    return{
      ...state,
      error:true,
      loading:false,
    }
  }
}

//reducer con Switch
const reducerSwitch = (state,action) =>{
  switch(action.type){
    case "ERROR":
      return{
        ...state,
        error: true,
        loading:false,
      }
    break;
    case "CHECK":
      return{
        ...state,
        error: true,
        loading:false,
      }
    break;

    default:
      return{
        ...state
      }
  }
}

const reducerObject = (state) =>({
  "ERROR":{
    ...state,
    error: true,
    loading:false,
  },
  "CHECK":{
    ...state,
    error: false,
    loading:true,
  }
})

const reducer = (state, action) => {
  if(reducerObject(state)[action.type]){
    return reducerObject(state)[action.type]
  }else{
    return state
  }
}