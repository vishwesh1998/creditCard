import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
        name : "CardNumData",
        initialState : {
            value : ""
        },
        reducers : {
            AddCardNum : (state,action)=>{
                // if(action.payload.length==4)
                // {
                //     action.payload = 
                // }
                state.value = action.payload
                // console.log(state.value)
            }
        }
})

export const {AddCardNum} = slice.actions 
export default slice.reducer
