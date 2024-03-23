import React, { useState } from 'react'

export default function Inputtxt () {
  
const[newtxt,setTxt]=useState();

const txtcng=(e)=>{
    console.log(setTxt(e.target.value));
}


    return (

    <div>
<input type="text" placeholder='enter something to get console' value="newtxt" onChange={txtcng}></input>

    </div>
  )
}