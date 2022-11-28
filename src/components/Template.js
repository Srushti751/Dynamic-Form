import React, { useEffect, useState } from 'react'
import "./Template.css"
import FormInput from './FormInput'
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

function Template() {
    const [fieldArray, setFieldArray] = useState([])
    const [title, setTitle] = useState("")
    const [icon, setIcon] = useState("")
    const [iconFunc, setIconFunc] = useState("")

    const addField = (e) => {
        e.preventDefault()
        fieldArray.push({ "title": title, "icon": iconFunc, "iconName": iconFunc.type.name })
        setFieldArray([...fieldArray])
        setTitle("")
    }
    console.log("icon", icon)

    const chooseIcon = () => {

        switch (icon) {
            case "BsFillPersonFill": setIconFunc(<BsFillPersonFill />)
                break;
            case "FaWpforms": setIconFunc(<FaWpforms />)
                break;
            case "AiFillMail": setIconFunc(<AiFillMail />)
                break;
            case "BsFillTelephoneFill": setIconFunc(<BsFillTelephoneFill />)
                break;
            default: return

        }
    }

    useEffect(() => {
        chooseIcon()
    }, [icon])

    const loginOnKeypress = (e) => {
        if (e.key == "Enter") {
          addField(e);
        }
      };

    return (
        <div className='container'>
            {console.log("iconFunc", iconFunc)}
            <div className='row'>
                {console.log("fieldArray", fieldArray)}
                <div className='col-6'>
                    <FormInput fieldArray={fieldArray} />
                </div>
                <div className='col-6'>
                    <form onSubmit={addField}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder='Field Title' value={title}
                                onKeyDown={(e) => loginOnKeypress(e)}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <select className='form-control' onChange={(e) => setIcon(e.target.value)}
                                onKeyDown={(e) => loginOnKeypress(e)}

                            >
                                <option  >Select Icon</option>
                                <option value={"BsFillPersonFill"}>Name</option>
                                <option value={"FaWpforms"}>Forms</option>
                                <option value={"AiFillMail"}>Email</option>
                                <option value={"BsFillTelephoneFill"}>Phone</option>
                            </select>
                        </div>


                        <button type="submit" className="btn btn-primary" >Add Field</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Template