import React from 'react'

function FormDetail({form}) {
    return (
        <table class="table">
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