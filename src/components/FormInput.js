import React, { createRef, useEffect, useRef, useState } from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import FormDetail from './FormDetail'


function FormInput({ fieldArray }) {
    const [valueInp, setValueInp] = useState("")
    const [send, setSend] = useState(false)
    const [lsForm, setLsform] = useState([])
    // let itemsEls = useRef([]);


    const setInp = (value, f) => {
        // e.preventDefault()
        console.log("f", f)
        f.inp = value
    }

    const sendForm = async (e) => {
        e.preventDefault()
        setSend(true)
        if(localStorage.getItem("details")){
            const data = JSON.parse(localStorage.getItem("details"))
            setLsform([data,{"form":fieldArray}])
            localStorage.setItem("details",JSON.stringify([...data,{"form":fieldArray}]))
        }
        else{
            localStorage.setItem("details",JSON.stringify([{"form":fieldArray}]))
        }
        // console.log('form', fieldArray)

    }


    return (
        <>
            <div className={`${fieldArray.length > 0 ? 'container border p-3' : ''}`}>
            {console.log('form', lsForm && lsForm)}

                {fieldArray && fieldArray.map((f, i) => {
                    // const getRef =  (itemsEls.current.push(i))
                    return (
                        <div className="mb-3" key={i} >
                            <div className='d-flex '>
                                <span className=' m-1'>{f.icon}</span>
                                <label className="form-label">{f.title}</label>
                            </div>

                            <input type="text" className="form-control"
                                onChange={(e) => { setInp(e.target.value, f) }}
                            // onChange={(e) => { setValueInp(e.target.value) }}
                            />
                            {/* <button onClick={(e) => setInp(e, valueInp, f)}>ok</button> */}
                            {i == fieldArray.length - 1 && <button className='btn btn-primary mt-3' onClick={(e) => sendForm(e)}>Send Form</button>}
                        </div>
                    )

                }
                )}
            </div>

            {send &&
                 <FormDetail form={fieldArray} />}

        </>
    )
}

export default FormInput