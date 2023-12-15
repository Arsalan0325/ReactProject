import React, { useState } from 'react'

export default function FormData() {

 const [text, setText] =  useState("")

 const [input, setInput] = useState("");

  function chng(){
    setText(input);
  }

  return (
    <div>
    {text}
    <input type="text" onChange={(e)=>{ setInput(e.target.value)}}/>
    <button onClick={chng}>Click for Change</button>

    </div>
  )
}
