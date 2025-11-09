import React,{useState} from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
 
import './App.css'

export default function App() {
  const [notes, setNotes] = useState([])
  return (
    <div className='flex flex-col items-center justify-center min-h-dvh bg-gray-600'>
  <Header notesCount={notes.length}/>
  <div className="relative flex flex-col items-center">
    <Main notes={notes} setNotes={setNotes}/>
  </div>
</div>

  )
}
