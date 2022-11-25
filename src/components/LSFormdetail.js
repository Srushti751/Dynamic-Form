import React, { useEffect, useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
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
            default: return

        }
    }


    return (
        <table class="table mt-5 border">
            {console.log("----",form && form)}
            {form.map((f, i) => (
                <>
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">icon</th>
                            <th scope="col">Field</th>
                            <th scope="col">Data</th>

                        </tr>
                    </thead>
                    {/* <tbody>

                        {f.map((ff, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{showIcon(ff.iconName)}</td>
                                <td>{ff.title}</td>
                                <td>{ff.inp}</td>

                            </tr>
                        ))}
                    </tbody> */}
                </>
            ))
            }
            {/* <thead>
                <tr>
                    <th scope="col">Sr No.</th>
                    <th scope="col">icon</th>
                    <th scope="col">Field</th>
                    <th scope="col">Data</th>

                </tr>
            </thead> */}
            {/* <tbody>
                {form.map((f, i) => (

                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{showIcon(f.iconName)}</td>
                        <td>{f.title}</td>
                        <td>{f.inp}</td>

                    </tr>
                ))}

            </tbody> */}
        </table>
    )
}

export default LSFormdetail