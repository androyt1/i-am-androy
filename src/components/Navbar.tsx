import React from 'react'
import {CgMenuHotdog,CgMenu} from 'react-icons/cg'
import {motion} from 'framer-motion'

interface ItemProp{
    open:boolean
    toggle():void
}


const Navbar = ({open,toggle}:ItemProp) => {  

  return (
    <nav className='w-full px-3 h-[60px] flex justify-between items-center text-slate-50'>
        <motion.h5 whileHover={{ scale: 0.9 }} className='text-xl font-semibold cursor-pointer'>Androy</motion.h5>
        <ul>            
            <motion.li whileHover={{
                scale: 1.2                
            }}
  whileTap={{ scale: 0.9 }} className='inline-block ml-4 text-xs cursor-pointer select-none' onClick={toggle}>{ open ? <CgMenu className='text-3xl text-slate-800 select-none'/>: <CgMenuHotdog className='text-3xl text-slate-800 select-none'/> }</motion.li>
        </ul>
    </nav>
  )
}

export default Navbar