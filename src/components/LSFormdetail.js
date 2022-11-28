import React, { useEffect, useState } from 'react'
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
function LSFormdetail({ }) {
    const [form, setform] = useState([])

    useEffect(() => {

        if (localStorage.getItem("details")) {
            const details = JSON.parse(localStorage.getItem("details"))

            setform(details)
        }
    }, [])

    const showIcon = (icon) => {

        switch (icon) {
            case "BsFillPersonFill": return <BsFillPersonFill />
            case "FaWpforms": return (<FaWpforms />)
            case "AiFillMail": return (<AiFillMail />)
            case "BsFillTelephoneFill": return (<BsFillTelephoneFill />)
            default: return

        }
    }


    return (
        <>

            {/* <table className="table mt-5 border container">
                {console.log("----", form && form)}
                {form.map((f, i) => (
                    <>
                        <thead>
                            {console.log("f", f.form)}
                            <tr>
                                <th> Form No.{i + 1}</th>
                            </tr>
                            <tr className='bg-light'>
                                <th scope="col">Sr No.</th>
                                <th scope="col">icon</th>
                                <th scope="col">Field</th>
                                <th scope="col">Data</th>

                            </tr>
                        </thead>
                        <tbody>

                            {f?.form.map((ff, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{showIcon(ff.iconName)}</td>
                                    <td>{ff.title}</td>
                                    <td>{ff.inp}</td>

                                </tr>
                            ))}
                        </tbody>
                        <br />
                    </>
                ))
                }
         
            
            </table> */}
            <div className='container'>
                <div className='row'>

                    {form.map((f, i) => (
                        <div className='col-6'>
                            <div className=' border bg-light p-3 mt-3 rounded'>

                                <h5>Form No.{i + 1}</h5>
                                <hr />
                                <>
                                    {f?.form.map((ff, i) => (

                                        <div className='row '>

                                            <div className='col-4'>
                                                <p>{ff.title}</p>

                                            </div>
                                            <div className='col-6'>
                                                <div className='d-flex '>
                                                    <span className='p-2 mt-2'>{showIcon(ff.iconName)}</span>
                                                    <input type="text" className='form-control' style={{ border: "none", borderBottom: "1px solid grey" }} value={ff.inp} />
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>

    )
}

export default LSFormdetail