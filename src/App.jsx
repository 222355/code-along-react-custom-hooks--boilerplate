import React from 'react'
import useStorage from'./useStorage'
import './App.css'

function App() {
  const [text,setText]=useStorage('key','')
  const handleText=(event)=>{
    console.log(event.target.value)
    setText(event.target.value)
  }
  return (
    <div className='page'>
      <input className='input' value={text} onChange={handleText}  type='text'/>
    </div>
  )
}

export default App