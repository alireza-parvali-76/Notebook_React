import React from 'react'
import { MdModeEdit, MdDelete  } from "react-icons/md";

export default function Letters() {
  return (
    <div>
        <div className='w-240 grid grid-cols-3 gap-3 mt-5'>
            <div className='flex items-center justify-center mt-10'>
                <span className='font-serif text-white text-2xl'>!هنوز یادداشتی ندارید</span>
            </div>
            <div className='bg-white p-5 flex flex-col rounded-2xl'>
                <div className='flex justify-between p-2.5 bg-blue-600 w-full rounded-2xl'>
                    <div className='flex items-center'>
                        <span className='text-white text-[18px] cursor-pointer mr-2'><MdDelete /></span>
                        <span className='text-white text-[18px] cursor-pointer'><MdModeEdit /></span>
                    </div>
                    <div>
                        <span className='font-serif'></span>
                    </div>
                </div>                    
                <div className='h-20 bg-blue-600 overflow-hidden text-right border-b border-b-gray-100 mt-2.5 p-2 rounded-2xl ' dir='rtl'>
                    <span className='font-serif line-clamp-3'>
                    </span>
                </div>
                <div className='mt-2.5'>
                    <span className='text-[12px] font-normal font-serif'>
                        ۱۴۰۴ / ۸ / ۱۴
                    </span>
                </div>
            </div>            
        </div>
    </div>
  )
}
