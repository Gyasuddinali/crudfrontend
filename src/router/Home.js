
import React from 'react'
import '../router/Routercss.css'
import image1 from '../Handling/1725359550794.png'; 
export default function Home() {
  return (
    <div><h1 className='bg-danger text-center'>This is Home Page</h1>
  <div className='container-fluid bg-success' id='img'> 
<h4>
    CRUD operations in Java refer to the fundamental operations you can 
    perform on data in a database or data structure.
     These operations are necessary for maintaining and 
     modifying data in a wide range of applications, 
     from simple managing database systems to complex 
     data storage systems</h4>
     
     <h4><img className='rounded-circle container'  id='img1' src={image1} alt="logo" />GET: The method requests data from a specified resource. It takes existing data from the server and reads or retrieves it without changing it.
PUT: The method updates existing data on the server. It sends data to be stored at a specific resource location, replacing the resource's current content.<br></br>
DELETE: The method is used to remove data from a specified resource. The resource is removed from the server and is no longer accessible as a resultGET: The method requests data from a specified resource. It takes existing data from the server and reads or retrieves it without changing it.<br></br>
PUT: The method updates existing data on the server. It sends data to be stored at a specific resource location, replacing the resource's current content.<br></br>
DELETE: The method is used to remove data from a specified resource. The resource is removed from the server and is no longer accessible as a result.</h4></div>
</div>
  )
}
