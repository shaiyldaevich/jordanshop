import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    details:{}
}



export const DetailsSlice = createSlice({
name:"ADD_DETAILS",
initialState,
reducers:{
    detailsPage(state,action){
 state.details = action.payload
    }
}
})
export const {detailsPage}=DetailsSlice.actions
export default DetailsSlice.reducer