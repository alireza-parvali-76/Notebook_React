import React from 'react'
import { FaPlus } from "react-icons/fa";

export default function Main() {
    function addNote(){
        
    }
  return (
    <div>
        <div className='w-140 bg-white mt-10 rounded-2xl'>
            <div className='flex items-center justify-center p-3' >
                <input type="text" className='min-w-11/12 bg-blue-600 text-white p-2.5 text-right font-serif rounded-2xl mt-3'
                 placeholder='...عنوان یادداشت'/>
            </div>
            <div className='flex items-center justify-center p-3'>
                <textarea className='min-w-11/12 bg-blue-600 text-white p-2.5 text-right font-serif rounded-2xl resize-none h-[90px]'
                placeholder='...متن یادداشت'></textarea>
            </div>
            <div className='flex items-center justify-center p-3'>
                <button className='flex items-center bg-blue-600 p-4 rounded-2xl cursor-pointer mb-3
                transform transition-transform duration-400 hover:scale-103 will-change-transform'>
                    <span className='text-white mr-2'><FaPlus /></span>
                    <span className='font-serif text-white' onClick={addNote}>افزودن یادداشت</span>
                </button>
            </div>
        </div>
    </div>    
  )
}
