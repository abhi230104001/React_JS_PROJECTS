import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards.jsx'
//  App.jsx and  cards.jsx both are components and every components has empty props
// by using props we change one component  by using other component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'> tailwind test</h1>
        <Cards username="chai aur code"/>
        <Cards/>
    </>
  )
}

export default App
