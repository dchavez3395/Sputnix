import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-4 text-center m-auto object-center overflow-hidden justify-center py-16 bg-black text-white'>
        <h2 className='text-sm'>SPUTNIX © 2022</h2>
        <ul className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>TWITTER</li>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>YOUTUBE</li>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>INSTAGRAM</li>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>FLICKR</li>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>LINKEDIN</li>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>PRIVACY POLOCY</li>
            <li className='text-xs font-bold cursor-pointer hover:opacity-75'>SUPPLIERS</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
