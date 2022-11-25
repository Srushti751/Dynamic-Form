import React, { useEffect, useState } from 'react'

function FormDetail({form}) {
    // const [form, setform] = useState([])

    // useEffect(() => {
     
    //     if(localStorage.getItem("details")){
    
    //         const details = JSON.parse(localStorage.getItem("details"))
    //         setform(details)
    //         console.log("details",details)
    //     }
    // }, [])
    
    return (
        <table class="table mt-5 border">
            {console.log(form && form)}
            <thead>
                <tr>
                    <th scope="col">Sr No.</th>
                    <th scope="col">icon</th>
                    <th scope="col">Field</th>
                    <th scope="col">Data</th>
                   
                </tr>
            </thead>
            <tbody>
                {form.map((f,i)=>(

                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{f.icon}</td>
                    <td>{f.title}</td>
                    <td>{f.inp}</td>
                    
                </tr>
                ))}
              
            </tbody>
        </table>
    )
}

export default FormDetail