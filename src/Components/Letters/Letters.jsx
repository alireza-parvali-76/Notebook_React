import React from 'react'
import { MdModeEdit, MdDelete  } from "react-icons/md";

export default function Letters({notes, onEdit, onDelete}) {
    if (!notes || notes.length === 0) {
        return(
             <div className='flex items-center justify-center mt-10'>
                <span className='font-serif text-white text-2xl'>!هنوز یادداشتی ندارید</span>
            </div>
        )
    }
  return (
    <div>
        <div className='w-5xl grid grid-cols-3 gap-3 mt-5'>
           {notes.map((note , index) =>(
                 <div key={index} className='bg-white p-5 flex flex-col rounded-2xl'>
                    <div className='flex justify-between p-2.5 bg-blue-600 w-full rounded-2xl'>
                        <div className='flex items-center'>
                            <span className='text-white text-[18px] cursor-pointer mr-2'
                            onClick={() => onDelete(note.id)}><MdDelete /></span>
                            <span className='text-white text-[18px] cursor-pointer'
                            onClick={() => onEdit(note)}><MdModeEdit /></span>
                        </div>
                        <div>
                            <span className='font-serif text-white'>{note.title}</span>
                        </div>
                    </div>                    
                    <div className='h-20 bg-blue-600 overflow-hidden text-right border-b border-b-gray-100 mt-2.5 p-2 rounded-2xl ' dir='rtl'>
                        <span className='font-serif line-clamp-3 text-white'>{note.content}</span>
                    </div>
                    <div className='mt-2.5'>
                        <span className='text-[12px] font-normal font-serif'>{note.date}</span>
                    </div>
            </div>   
           ))}
                    
        </div>
    </div>
  )
}
