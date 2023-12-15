import React, { useState } from 'react'

export default function ArrayHook() {

    const [array, setArray] = useState(["Ali"]);
 
    let p1 = ["Ali","Wali"];
    let p2 = ["dala","hallah"];


    function change(){
        console.log(array)
        setArray(array.push(...p1))
        console.log(array)
    }

    return (
        <div>
        <button onClick={change}>Change</button>
        </div>
    )
}
