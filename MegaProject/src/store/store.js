import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from "./slice"
export const store = configureStore({
    reducer: {
      auth : authSliceReducer
    },
  })