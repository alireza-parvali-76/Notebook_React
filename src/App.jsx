import React from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
 
import './App.css'
import Letters from './Components/Letters/Letters'

export default function App() {
  return (
    <div className=''>
     <div className='flex items-center justify-center flex-col min-h-dvh bg-gray-600 h-full'>
      <Header />
      <Main />
      <Letters />
     </div>
    </div>
  )
}
