import {configureStore} from '@reduxjs/toolkit'
import CrdNumData from './Slice/CardNumberSlice'
import CrdNameData from './Slice/CardNameSlice'
import CrdDateData from './Slice/CardDateSlice'
import CrdCvvData from './Slice/CardCvvSlice'

const store = configureStore({
    reducer : {
        crdData : CrdNumData,
        crdName : CrdNameData,
        crdDate : CrdDateData,
        crdCvv :  CrdCvvData
    }
})

export default store