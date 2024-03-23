import { useState } from 'react';
import './SubComponents.css'
import SubComponents1 from './SubComponents1';
function SubComponents(props){

    const [newid,NewtSetid]=useState();
   const [id1,setId] =useState(props.id1);
    const eventhandle=()=>{
        //alert("eventhandler called");
        setId(newid);
    }
    const chngtxt=(e)=>{
NewtSetid(e.target.value);
    }
    return( 

        
       <div className="props">
       <SubComponents1 />

       <h1>{id1}</h1>
        <h1>{props.item1}</h1>
  
    <h1>{props.company1}</h1>
    <h1>{props.price1}</h1>
    <input type='text' value={newid} onChange={chngtxt}></input>
    <button onClick={eventhandle}>clickit</button>
</div>
    
    );
}
export default SubComponents;