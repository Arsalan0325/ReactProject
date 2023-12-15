import React from 'react'

export default function FormTable(props) {
    console.log(props.accessForm)
    return (
        <div>
        <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            {props.accessForm.map(
                (item,index) => {
                    return(
                        <>
                        <td>{item}</td>
                        </>
                    )
                }
            )}
          </tr>
          
        </tbody>
      </table>
        </div>
    )
}
