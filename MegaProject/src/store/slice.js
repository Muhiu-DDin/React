import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    status : false , 
    userData : {}
}
export const authSlice = createSlice(
    {
        name : "user",
        initialState , 
        reducers : {
            login : (state , action)=>{
                state.status = true;
                state.userData = action.payload;
            } ,
            logout : (state)=>{
                state.status = false ;
                state.userData = null ;
            }
        }
    }
)
export default authSlice.reducer;
export const {login , logout}= authSlice.actions ;