import { useState } from 'react'
import './index.css'
import Header from './Header'
import Meme from './Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Meme/>
    </>
  )
}

export default App
