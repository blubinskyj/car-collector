import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()
  useEffect(()=>{
      fetch("/").then(
          res => res.json()
      ).then(data=> setData())
  },[])

  return (
    <>
   </>
  )
}

export default App
