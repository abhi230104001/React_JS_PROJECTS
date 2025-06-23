import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1> Add to day task </h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
