import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // by using different type of hook we can directly manipulate the userinterface
  //  usestate is  hook which return array an every index of array has it's own work
  // for eg: 0th idex is variable on which hook is applied, 1th index is function to control variable;
  let [counter,setcounter] = useState(15);// 15 is default value of variable counter we give any name to function;
  
//let counter = 15 above counter is behave like normal variable just  way of declaration is different
const addvalue = ()=>{
  if(counter<20)
  setcounter(counter+1);
else console.log("20 is the maximum limit")
}
const removevalue = ()=>{
  if(counter>0)
  setcounter(counter-1);
else console.log("counter can not take negative value")
}
  return (
    <>
      
      <h1> chai aur code</h1>
      <h2> counter value: {counter}</h2>
      <button onClick={addvalue}>add value {counter}</button>
      <br/>
      <button onClick={removevalue}> remove value {counter}</button>


    </>
  )
}

export default App
