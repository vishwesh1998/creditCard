import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "CrdCvv",
    initialState : {
        value : ""
    },
    reducers : {
        AddCardCvv : (state,action) =>{
            state.value = [action.payload]
            // console.log(state.value)
        }
    } 
})

export default slice.reducer    
export const {AddCardCvv} = slice.actions