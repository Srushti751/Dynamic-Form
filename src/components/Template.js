import React, { useEffect, useState } from 'react'
import "./Template.css"
import FormInput from './FormInput'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'

function Template() {
    const [fieldArray, setFieldArray] = useState([])
    const [title, setTitle] = useState("")
    const [icon, setIcon] = useState("")
    const [iconFunc, setIconFunc] = useState("")

    const addField = (e) => {
        e.preventDefault()
        fieldArray.push({ "title": title, "icon":iconFunc })
        setFieldArray([...fieldArray])
        setTitle("")
    }
    console.log("icon",icon)

    const chooseIcon = ()=>{

        switch(icon){
            case "BsFillPeopleFill": setIconFunc(<BsFillPeopleFill/>)
            break;
            case "FaWpforms" : setIconFunc(<FaWpforms/>)
            break;
            default : return
    
        }
    }

    useEffect(() => {
      chooseIcon()
    }, [icon])
    

    return (
        <div className='container'>
            {console.log("iconFunc",iconFunc)}
            <div className='row'>
                {console.log("fieldArray", fieldArray)}
                <div className='col-6'>
                    <FormInput fieldArray={fieldArray}  />
                </div>
                <div className='col-6'>
                    <form onSubmit={addField}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <select onChange={(e)=>setIcon(e.target.value)} defaultValue={"BsFillPeopleFill"}>
                                <option  >Select</option>
                                <option  value={"BsFillPeopleFill"}>People</option>
                                <option value={"FaWpforms"}>Forms</option>
                            </select>
                        </div>


                        <button type="submit" className="btn btn-primary" >Add</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Template