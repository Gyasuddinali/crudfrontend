import React, { useState } from 'react'
import '../index.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
export default function Input() {

  const usenavigate=useNavigate();
    const [name,setName]=useState({
 id:"",
      username:"",
      email:"",
      password:'',
      father:'',
      mother:"",
      role:""
    });

    const inpcng=(e)=>{
      // console.log(e.target.value);
      // console.log(e.target.name);

const value1=e.target.value;
const name1=e.target.name;
//console.log(value,name);

// setName((prev)=>{


// //comlex to easy
// return{
// ...prev,[name1]:value1,
// }

setName({...name,[name1]:value1
});
}

const buttonhnd=async(e1)=>{
e1.preventDefault();
const responses=await axios.post("http://localhost:8080/store",name)
.then((respose)=>{console.log("success")})
.catch(
  (error)=>{

    console.log("error");
  }
)
console.log(responses.data);
}


  

    
  return (
    <div id='form'>
      <h1>Add User Data</h1>
      <form onSubmit={buttonhnd}>
      
      
   <div className='di'>
   <label for="id">id</label><input type="text" name='id' placeholder='enter id' value={name.id} onChange={inpcng}></input><br/>

<label>username </label><input type="text" name='username' placeholder='enter username' value={name.username} onChange={inpcng}></input><br/>

        <label for="email">
        email
          
      </label>  <input type="email" name='email' placeholder='enter email' value={name.email} onChange={inpcng}></input><br/>
       
      <label for="password">password</label> <input type="password" name='password' placeholder='enter password' value={name.password} onChange={inpcng}></input><br/>

       <label for="father">father name</label><input type="text" name='father' placeholder='enter father' value={name.father} onChange={inpcng}></input><br/>
       <label for="mother">mother name</label><input type="text" name='mother' placeholder='enter mother' value={name.mother} onChange={inpcng}></input><br/>
       <label for="role">Role</label><input type="text" name='role' placeholder='enter user role' value={name.role} onChange={inpcng}></input><br/>

        <button className=" bg-success text-white mt-3" type="submit">Add Data</button>
        </div>

        <table border={1}>
            
            <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>FATHER</th>
            <th>MOTHER</th>
            
            </tr>
            <tr>
              <td>{name.id}</td>
              <td>{name.username}</td>
              <td>{name.email}</td>
              <td>{name.password}</td>
              <td>{name.father}</td>
              <td>{name.mother}</td>
<th><button onClick={()=>usenavigate("/home")}>onclic calling</button></th>
            </tr>
            </table>
        </form>
    </div>
  )
}
