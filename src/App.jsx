import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './App.css'

export default function App() {
  const [notes, setNotes] = useState(() => {
    //  بارگذاری اولیه از localStorage
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  //  هر بار notes تغییر کرد، ذخیره در localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className='flex flex-col items-center justify-center min-h-dvh bg-gray-600'>
      <Header notesCount={notes.length}/>
      <div className="relative flex flex-col items-center">
        <Main notes={notes} setNotes={setNotes}/>
      </div>
    </div>
  )
}
