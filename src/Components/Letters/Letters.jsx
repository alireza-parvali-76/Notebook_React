import React from 'react'
import { MdModeEdit, MdDelete  } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion'

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
          <AnimatePresence>
  {notes.map((note) => (
    <motion.div
      key={note.id}
      className='bg-white p-5 flex flex-col rounded-2xl'
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -30 }}
      transition={{ type: "spring", stiffness: 220, damping: 25 }}
    >
      <div className='flex justify-between p-2.5 bg-blue-600 w-full rounded-2xl'>
        <div className='flex items-center'>
          <span
            className='text-white text-[18px] cursor-pointer mr-2'
            onClick={() => onDelete(note.id)}
          ><MdDelete /></span>
          <span
            className='text-white text-[18px] cursor-pointer'
            onClick={() => onEdit(note)}
          ><MdModeEdit /></span>
        </div>
        <div><span className='font-serif text-white'>{note.title}</span></div>
      </div>

      <div className='h-20 bg-blue-600 text-right border-b border-b-gray-100 mt-2.5 p-2 rounded-2xl
      overflow-y-auto overflow-x-hidden wrap-break-word scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200' dir='rtl'>
        <span className='font-serif text-white'>{note.content}</span>
      </div>

      <div className='mt-2.5'>
        <span className='text-[12px] font-normal font-serif'>{note.date}</span>
      </div>
    </motion.div>
  ))}
</AnimatePresence>      
        </div>
    </div>
  )
}
