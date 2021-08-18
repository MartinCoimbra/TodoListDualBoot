//importo para crear mi slice
import { createSlice } from '@reduxjs/toolkit'

/* export const counterSlice = createSlice({
    name: 'counterLists', */
    //defino el state a utilizar
   /*  initialState: {
      value: 0, 
    }, */
    //defino las funciones para modificar los states
  /*   reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  }) */

  export const ListAdd = createSlice({
      name:"ListaAdd",
      initialState:{
          myList: [],
      },
      reducers:{
          listAdd:(state, array) => { 
              state.myList = [array.payload, ...state.myList]
          }
      }
  })

  // exporto las "acciones" o funciones a usar
export const ListAddActions = ListAdd.actions;
//exporto el slice
export default ListAdd;