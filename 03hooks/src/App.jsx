import { useState } from 'react'



import './App.css'

function App() {
  // const counter=0;
  let [counter,setCounter]=useState(0);
  const addvalue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
    else alert("you cant exceed number more than 20");
    
  }

  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    else alert("you cant go on negative side");
    
  }

  return (
    <>
    <div>
      <h1>CountDown start  {counter}</h1>

      <button
        onClick={addvalue}

      >add value</button>
      <br />
      <br />
      <button
      onClick={removevalue}
      >remove value</button>

      <footer>{counter}</footer>
    </div>
    </>
  )
}

export default App
