import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import todoReducer from './slices/todo'
import userReducer from './slices/userDetails'


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoReducer,
    user:userReducer
  },
})