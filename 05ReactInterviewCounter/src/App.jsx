import { useState } from 'react'

import './App.css'

//the question is that in addvalue function we use mulitple setcounter method. you have to answer it whether the value is increased by all the increased value at a time or increase some other value.

//answer :- it can increase the whole number ,counter increases only by one

//then how can we increase the number multiple times

// answer:- using prevcounter to increase in setcounter ( setcounter uses a callback function)

function App() {
  const [counter, setCounter] = useState(0)
  const addvalue=()=>{
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);

   }
   const removevalue=()=>{
    setCounter(counter-1);
   }

  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={addvalue}>increase value</button> 
      <br />
      <button onClick={removevalue}>decrease value</button>
    </>
  )
}

export default App
