import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './App.css'
import './index.css'

export default function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-600">
      {/* هدر ثابت و وسط‌چین */}
      <div className="mt-16">
        <Header notesCount={notes.length} />
      </div>

      {/* بخش مرکزی برای فرم + لیست نوت */}
      <div className="flex flex-col items-center mt-10 w-full max-w-5xl">
        <Main notes={notes} setNotes={setNotes} />
      </div>
    </div>
  )
}

