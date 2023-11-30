import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    value: [],
    isGluten: false
  }
export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,

    reducers: {
      addIngredient:(state,action) =>{
        let obj = {
          id :uuidv4(),
          title: action.payload
        };
        state.value.push(obj)
        // if (state.value.find((elem)=> elem.title !== action.payload)){
        //   state.value.push(obj)
        // }
        // else{
        //   alert("this ingredient already added")
        // }
        // state.value=[...state.value,action.payload]
      },
      isGluten: (state) =>{
        state.isGluten = !state.isGluten
      },
      deleteIngredient: (state,action) =>{
        state.ingredients = state.ingredients.filter((ingr)=>ingr.id != action.payload)
      }
     
    }
  })
  
  export const { addIngredient,  isGluten, deleteIngredient } = ingredientSlice.actions
  
  export default ingredientSlice.reducer