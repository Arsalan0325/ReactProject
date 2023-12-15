import { useState } from 'react';
import React from 'react'

import FormTable from './FormTable';

import singup from "../assets/singup.png"

export default function Form() {

    const data = {name:"", email:"", password:""} // i have Save form Input Values in Object 
    
    const [inputData, setInputData] = useState(data); //Call use State Like This.


    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }

    let array = [inputData.name,inputData.email,inputData.password]

    return (
        <div>
            <form className='container'>
                <div className='header'> 
                <img  src={singup} alt="" width={'100px'} />
                <h1>Sing Up Form</h1>
                </div>
                <div>
                <label>Username: 
                    <input type="text" placeholder="Enter Your Name" required name='name' value={inputData.name} onChange={handleData}  />
                </label>
                </div>
                <div>
                <label>Email:  
                    <input type="email" placeholder="Enter Your Email" required name='email'  value={inputData.email} onChange={handleData}  />
                </label>
                </div>
                <div>
                    <label  >Password:
                     <input type="password" placeholder="Type your Password" required name='password' value={inputData.password} onChange={handleData}  />
                    </label>
                </div>
                <div>
                    <button className='btn1' type='submit'>Sing in</button>
                </div>
                <div class='line'></div>
                <div>
          
                </div>

            </form>
            <FormTable  accessForm = {array } />
        </div>
        

    )
}
