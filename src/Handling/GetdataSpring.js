import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdatData from './UpdatData';

export default function GetdataSpring() {
    const [getdata,setdata]=useState([]);
    useEffect(()=>{
        fetchdata();
    },[]);

    
const formgg=()=>{
    <UpdatData></UpdatData>
}


    const fetchdata=async()=>{
const url="http://localhost:8080/getting";
const response=await axios.get(url);
setdata(response.data);
console.log(response.data);
    }
  return (
    <div>
<form onSubmit={    <UpdatData></UpdatData>}>
<button type='submit'>updatedata</button>
</form>

        <table border={1} style={{backgroundColor:"red",color:"white"}}>
            
                <tr style={{backgroundColor:"green"}}>
                <th>ID</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>FATHER</th>
                <th>MOTHER</th>
                
                </tr>
               
                <tbody>
                     {getdata.map((student)=>(
                         <tr style={{backgroundColor:"red"}}> 
 <th>{student.id}</th> 
 <td>{student.username}</td>
 <td>{student.email}</td>
 <td>{student.password}</td>
 <td>{student.father}</td>
 <td>{student.mother}</td>
        <td>< button type='submit' onClick={formgg}>Add</button></td>            
        <td><button>Delete</button></td> 
        <td><button> Update</button></td> 
        <td><button>Get</button></td> 
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
