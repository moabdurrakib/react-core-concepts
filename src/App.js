import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products =[
    {name: 'Adobe Photoshop', price: '$80'},
    {name: 'Adobe PDF', price: '$100'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>
        <Product products ={products[0]}> </Product>
        <Person hname="Noman" > </Person>
        <Person job="BCS Cadre" > </Person>
      </header>
    </div>
  );
}

function Product (props){
  const productStyle ={
    border:'1px solid grey',
    borderRadius:'2px',
    backgroundColor:'aqua'
    
  }
  console.log(props);
  return(
    <div style={productStyle}>
      <h3>{props.products.name}</h3>
      <h2>{props.products.price}</h2>
    </div>
  )
}

function Counter(){
  const [count,setCount] =useState(10);
  return(
    <div>
      <h1> Count: {count}</h1>
    <button onClick={() => setCount(count-1)} >Decrease</button>
    <button onClick={() => setCount(count+1)} >Increase</button>
    </div>
  )
}
function Person(props){

  return(
     <div>
      <h1>He is {props.hname} </h1>
      <h3> He loves to be a  {props.job} </h3>
    </div>
    )
}
export default App;
