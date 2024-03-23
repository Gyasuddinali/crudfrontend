import React, { Component, useState } from "react";
import App from "../App";
class Classs extends Component{
    
    
    constructor(props){ 
           // this.state={};
        super(props);
            this.state={
    
              
                person:[
               {
                age:21,
                name:"g",
               },
               {
                age:32,
                name:"gh"
               }
            ]

            };
        }
    

        }
    
           // this.props=props;
            clickonme=()=>{
                alert("hello");
            console.log(this.state);
            };
  
    
    render(){
        let persons;
            persons=this.state.person.map((p)=>{
                return <App age={p.age} name={p.name}/>});
            
      
        return(
<div>
    <h1>hello class page</h1>
    <button type="button" onClick={this.clickonme}>click me</button>

    
</div>

        );
    }
}
export default Classs;