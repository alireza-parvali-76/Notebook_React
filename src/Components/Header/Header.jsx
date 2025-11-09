import React from 'react'
import { GiNotebook } from "react-icons/gi";


export default function Header() {
  return (
    <div className=''>
      <div className='bg-white w-xl p-4 rounded-2xl'>        
          <div className='flex items-center justify-center'>
            <span><GiNotebook className="text-2xl text-blue-400"/></span>
            <span className='text-black font-serif text-2xl'>یادداشت های من</span>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <span>0</span>
            <span className='font-serif font-medium text-[18px]'> : تعداد یادداشت</span>
          </div>
      </div>
    </div>
  )
}
