import React from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
 
import './App.css'

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-dvh bg-gray-600'>
  <Header />
  <div className="relative flex flex-col items-center">
    <Main />
  </div>
</div>

  )
}
