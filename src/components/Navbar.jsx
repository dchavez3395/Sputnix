import React, { useState } from 'react'
import {RiMenuFoldFill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
};

  return (
    <div className='py-4 header gap-3 flex px-8 lg:px-12 w-full justify-between'>
        <div className='flex flex-row '>
            <div className='w-[50%] md:w-[30%] m-auto lg:m-0 lg:w-[12%]'>
            <Link to='/' ><img className='cursor-pointer' src="https://github.com/dchavez3395/sputnik-v2/blob/main/assets/home/logo.png?raw=true" alt="" /></Link>
            </div>
            <ul className='lg:flex flex-row hidden   text-white gap-8 pt-1'>
                    <li className='cursor-pointer '><Link to='/destination'>Destination</Link></li>
                    <li className='cursor-pointer '><Link to='/crew'>Crew</Link></li>
                    <li className='cursor-pointer '><Link to='/technology'>Technology</Link></li>
            </ul>
        </div>
        {/* mobile button */}
        <div className='pt-2 z-[20000]' onClick={handleNav}>
          {nav ? (
                <AiOutlineClose className='text-white text-xl cursor-pointer' onClick={handleNav} />
              ) : (
                <RiMenuFoldFill className='text-white  text-xl cursor-pointer'/>
              )}
          </div>
          <div className={nav ? 'h-screen w-full lg:w-[20rem] absolute  top-0 right-0 bottom-0 flex justify-center items-center bg-black ease-in duration-300' : 'h-screen w-[20rem] absolute  top-0 right-[-100%] bottom-0 flex justify-center items-center bg-black ease-in duration-500'}>
          {/* rockets button */}
            <ul className='flex flex-col gap-8 text-white'>
              <li onClick={handleNav} className='lg:hidden text-xl'><Link to='/'>Home</Link></li>
              <li onClick={handleNav} className='lg:hidden text-xl'><Link to='/destination'>Destination</Link></li>
              <li onClick={handleNav} className='lg:hidden text-xl'><Link to='/crew'>Crew</Link></li>
              <li onClick={handleNav} className='lg:hidden text-xl'><Link to='/technology'>Technology</Link></li>
              <li onClick={handleNav} className='cursor-pointer text-xl'><Link to='/vostok'>Vostok X</Link></li>
              <li onClick={handleNav} className='cursor-pointer text-xl'><Link to='/venera-heavy'>Venera 9</Link></li>
              <li onClick={handleNav} className='cursor-pointer text-xl'><Link to='/dracarys'>Dracarys</Link></li>
              <li onClick={handleNav} className='cursor-pointer text-xl'><Link to='/mothership'>Mothership</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar