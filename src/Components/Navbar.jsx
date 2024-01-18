import React from 'react'

function Navbar() {
  return (
    <div className='container mx-auto px-4 items-center bg-blue-100 p-4 flex justify-between border-t-2 border-b-2 border-gray-700'>
        <div className='bg-blue-100 font-bold text-xl'>
            SSL Manager
        </div>
        <div className="bg-blue-100 flex items-center justify-center gap-10">
            <span className="bg-blue-100 text-black text-lg font-semibold flex items-center hover:text-green-900 hover:underline cursor-pointer ">How to Renew ?
            </span>
            <span className="bg-blue-100 text-black text-lg font-semibold flex items-center hover:text-green-900 hover:underline cursor-pointer ">Dashboard
            </span>
            <span className="bg-blue-100 text-black text-lg font-semibold flex items-center hover:text-green-900 hover:underline cursor-pointer ">Support
            </span>
            <span className="bg-blue-100 text-black text-lg font-semibold flex items-center hover:text-green-900 hover:underline cursor-pointer ">Delete
            </span>
        </div>
    </div>
  )
}

export default Navbar;