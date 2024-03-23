import './App.css';
import SubComponents1a from './Components/SubComponents1a';
import Classs from './Components/Classs';
import Inputtxt from './Components/formhandle/Inputtxt';
function App(props)
{
   let arr=[
      {
         id:1,
   item:"laptop",
   company:"toshiba",
   price:50000,
},
{
   id:2,
   item:"mobile",
   company:"redmi",
   price:7000,
},

{

   id:3,
   item:"bluetooth",
   company:"lenovo",
   price:1500,
}
];
return(<div>
   <Inputtxt></Inputtxt>
  <SubComponents1a ite={arr}/>
<Classs >
</Classs>
{Classs}
</div>
);



   // return <div className="h1"> <h1>hello</h1> <h2>world</h2> </div>;
   /*
return( 
<div>
<SubComponents
   id1={arr[0].id}
      item1={arr[0].item}
      company1={arr[0].company}
      price1={arr[0].price}

      
      >
         </SubComponents>



         <SubComponents
   
   id1={arr[1].id}
      item1={arr[1].item}
      company1={arr[1].company}
      price1={arr[1].price}

 
   >
      </SubComponents>



      <SubComponents
   
   id1={arr[2].id}
   item1={arr[2].item}
   company1={arr[2].company}
   price1={arr[2].price}


      
      >
         </SubComponents>
</div>
);*/
}
export default App;