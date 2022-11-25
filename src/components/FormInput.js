import React, { createRef, useEffect, useRef, useState } from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import FormDetail from './FormDetail'

function FormInput({ fieldArray }) {
    const [valueInp, setValueInp] = useState("")
    // let itemsEls = useRef([]);


    const setInp = (e, value, f) => {
        e.preventDefault()
        console.log("f", f)
        f.inp = value
    }

    const sendForm = async (e) => {
        e.preventDefault()
        console.log('form', fieldArray)

    }


    return (
        <>
            {fieldArray && fieldArray.map((f, i) => {
                // const getRef =  (itemsEls.current.push(i))

                return (
                    <div className="mb-3" key={i} >
                        <div className='d-flex '>
                            <label className="form-label">{f.title}</label>
                            <span className=' m-2'>{f.icon}</span>
                        </div>

                        <input type="text" className="form-control"
                            onChange={(e) => { setValueInp(e.target.value) }}
                        />
                        <button onClick={(e) => setInp(e, valueInp, f)}>ok</button>
                        <button onClick={(e) => sendForm(e)}>Send Form</button>
                    </div>
                )

            }
            )}

            <FormDetail form={fieldArray}/>

        </>
    )
}

export default FormInput