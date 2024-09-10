
import React, { useState } from 'react'
import '../index.css'
import axios from 'axios';
export default function DeleteUser() {
    const [idget,setid]=useState("")

    const handlesubmit=(e)=>{
e.preventDefault();
const data1=axios.delete("http://localhost:8080/del/")
.then((data1)=>{console.log("success")})
.catch(
  (error)=>{

    console.log("error");
  }
)

}
    
  
  return (
    <div id='form'>
        <h1>Delete Your User</h1>
<form onSubmit={handlesubmit}>

<label for="id">id</label><input type="text" name='id' placeholder='enter id' value={idget} onChange={(e)=>{setid(e.target.value)}}></input><br/>
<button type='submit'>DeleteUser</button>
</form>

    </div>
  )
}
