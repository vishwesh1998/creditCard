import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "CrdNm",
    initialState : {
        value : []
    },
    reducers : {
        AddName : (state,action) =>{
            state.value = [action.payload]
            console.log(state.value)
        }
    }
})

export default slice.reducer
export const {AddName} = slice.actions