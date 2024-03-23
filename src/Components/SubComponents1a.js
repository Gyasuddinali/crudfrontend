import SubComponents from "./SubComponents";
function SubComponents1a(props){
    return(
<div>

<SubComponents
   id1={props.ite[0].id}
      item1={props.ite[0].item}
      company1={props.ite[0].company}
      price1={props.ite[0].price}
      
      >
         </SubComponents>



         <SubComponents
   
   id1={props.ite[1].id}
      item1={props.ite[1].item}
      company1={props.ite[1].company}
      price1={props.ite[1].price}

 
   >
      </SubComponents>



      <SubComponents
   
   id1={props.ite[2].id}
      item1={props.ite[2].item}
      company1={props.ite[2].company}
      price1={props.ite[2].price}

      
      >
         </SubComponents>

</div>

    );
}
export default SubComponents1a;