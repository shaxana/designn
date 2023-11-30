import { configureStore } from '@reduxjs/toolkit'
import ingredientReducer from "./slice"
export const store = configureStore({
  reducer: {
    ingredient: ingredientReducer
  },
})