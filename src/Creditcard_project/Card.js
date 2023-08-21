import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './Card.css'

export default function Card(props) {
    const data = useSelector(state => state.crdData.value)
    const name = useSelector(state => state.crdName.value)
    const month = useSelector(state => state.crdDate.value)
    const cvv = useSelector(state => state.crdCvv.value)

    let ShowCvv = () => { 
    cvv.map(ob => <p>{ob}</p>)
}

return <div className='card_container d-flex justify-content-center'>
        <div className="card front_contianer bg-primary" style={{ height: '40vh', width: "30vw", borderRadius: "30px" }}>
            <div className="row mt-4 ml-4">
                <div className='col-xl-6 col-lg-6'>
                    <img src='../.././assets/img/cardChip (2).jpg' width={40} />
                </div>
                <div className='col-xl-6 col-lg-6'>
                    <img src="../.././assets/img/visa.jpg" width={140} />
                </div>
            </div>
            <div className="row mt-4 ml-4">
                <div className='col-xl-12 col-lg-12'>
                    {
                        data == '' ?
                            <h2>4142 5678 **** ****</h2> :
                            // <h2>{data.map((ob,index)=>index==3?data.splice(4," "):ob)}</h2>
                            <h2>{data.slice(0, 4)} {data.slice(4, 8)} {data.slice(8, 12)} {data.slice(12, 16)}</h2>
                    }
                </div>
            </div>
            <div className="row mt-4 ml-2">
                <div className='col-xl-7 col-lg-7 mt-4'>
                    {name == '' ?
                        <h4>YOUR NAME HERE</h4> :
                        <h4>{name.map(ob => ob)}</h4>
                    }

                </div>
                <div className='col-xl-5 col-lg-5 pl-5'>
                    <b>valid thru</b>
                    <br />
                    {month == "" ? <b>**/**</b> :
                        <b>{month.slice(5, 7)}/{month.slice(2, 4)}</b>
                    }

                </div>
            </div>
        </div>
        <div className="card back_contianer bg-primary" style={{ height: '40vh', width: "30vw", borderRadius: "30px" }}>
            <div className="row mt-4">
                <div className='col-xl-12 col-lg-12'>
                    <img src="../.././assets/img/atmBack (2).jpg" style={{ width: '410px' }} />
                </div>
            </div>
            <div className="row mt-3 ml-2">
                <div className='col-xl-8 col-lg-8'>
                    {cvv == "" ? <h1 className='form-control' style={{ width: '310px', height: "40px" }}></h1> :
                        <h1 className='form-control cvv' style={{ width: '310px', height: "40px" }}>{cvv.map(ob => ob)}</h1>}
                </div>
            </div>
            <div className="row mt-4 ml-2">
                <div className='col-xl-10 col-lg-10'>
                    <img src="../.././assets/img/Visa2.jpg" style={{ width: '350px' }} />
                </div>
            </div>
        </div>
    </div>
}