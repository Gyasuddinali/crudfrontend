import React, { useState } from 'react'
import './Texthndle.css'

export default function Texthndle() {
    const [curtxt,setText]=useState("gffhf");
const [status,setStatus]=useState(false);
    const cng=(e)=>{
       setText(e.target.value);
     
        }
        const cg=()=>{
         setText(curtxt);
   console.log(curtxt);
        }
  return (
    <div>

      <button onClick={()=>{setStatus(!status)}}>
      {
        (status)? "hide" : "show"
      }
      
      </button>
      {(status)?<p>welcome</p>
:""

}
<br></br>
Type something and show in console<input type='text'onChange={cng}   value={curtxt}></input>
<button onClick={cg}>handlertxt</button>
    </div>
  )
}
