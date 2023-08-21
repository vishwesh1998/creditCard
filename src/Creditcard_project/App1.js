import Card from './Card'
import { useDispatch } from 'react-redux'
import { AddCardNum } from './Slice/CardNumberSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {AddName} from './Slice/CardNameSlice'
import {AddCardDate} from './Slice/CardDateSlice'
import {AddCardCvv} from './Slice/CardCvvSlice'
import './App.css'
import './Card.css'

export default function () {
    const data = useSelector(state => state.crdData.value)
    const [CrdInp, setCrdInp] = useState(false)
    const [NameInp, setNameInp] = useState(false)
    const dispatch = useDispatch()

    let CrdNum = (event) => {
        let data = event.target.value
        if (data.length < 17)
        {
            dispatch(AddCardNum(data))
        }
        else
        {
            alert("ATM Number Can't Be More Then 16 !")
            setCrdInp(true)
        }
        
    }

    let CrdName = (event)=>{
        let data = event.target.value
        dispatch(AddName(data))
    }

    let CrdDate = (event) =>{
        let data = event.target.value
        dispatch(AddCardDate(data))
    }

    let CrdCvv = (event) =>{
        let data = event.target.value
        if(data.length<4)
        {
            dispatch(AddCardCvv(data))
        }
        else
        {
            alert("Cvv Can't Be More Then 3 Digit's !")
        }
    }

    return <div className='body'>
        <h1 className='text-white text-center'>Virtual Credit Card</h1>
        <br />
        <br />
        <Card />
        <br />
        <br />
        <div className="input">
            <div>
                <div className="row mb-3" style={{ width: '30vw' }}>
                    <div className='col-12'>
                        <input type="number" placeholder='Card Number' className='form-control' style={{ borderRadius: '50px' }} onChange={(event) => CrdNum(event)} disabled={CrdInp} min={0}/>
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '30vw' }}>
                    <div className='col-12'>
                        <input type="text" placeholder='Your Name' className='form-control' style={{ borderRadius: '50px' }} disabled={NameInp} onChange={(event)=>CrdName(event)}/>
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '30vw' }}>
                    <div className='col-12'>
                        <input type='month' placeholder='Validity' className='form-control' style={{ borderRadius: '50px' }} onChange={(event)=>CrdDate(event)}/>
                    </div>
                </div>
                <div className="row mb-3" style={{ width: '30vw' }}>
                    <div className='col-12'>
                        <input type="number" placeholder='CVV' className='form-control' style={{ borderRadius: '50px' }} onChange={(event)=>CrdCvv(event)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}