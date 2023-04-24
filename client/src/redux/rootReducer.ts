import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import userSlice from './userSlice'
 
const rootReducer = combineReducers({
    todo: todoSlice.reducer,
    user: userSlice.reducer
})
 
export type RootState = ReturnType<typeof rootReducer>
 
export default rootReducer