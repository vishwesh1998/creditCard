import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "CrdDate",
    initialState : {
        value : ""
    },
    reducers : {
        AddCardDate : (state,action) =>{
            state.value = action.payload
            console.log(state.value)
        }
    }
})

export default slice.reducer
export const {AddCardDate} = slice.actions