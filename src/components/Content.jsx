import React from 'react'
import folder from '../assets/Folder.png'
const Content = () => {
  return (
   <>
   <div className='bg-slate-100	h-screen mt-2 '>
    <div>
    <h4 className='text-gray-600 text-lg ml-4 p-4 font-medium'>Inventory Summary</h4>
    <div >
        <div className='bg-blue-600 w-[646px] h-[145px] mt-[11px] rounded-lg ml-4'> 
        <div className='bg-slate-300 w-[36px] h-[36px] justify-between mt-[12px] ml-[8px] rounded-xl'>
            <img src={folder} alt="folder-icon " className='ml-[4px] text-white'/>

        </div>
        
           
        </div>
    </div>
    </div>

   </div>
   </>
  )
}

export default Content