import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

interface MobileProp{
    open:boolean
    toggle():void
}

const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration:1
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"        
      },
    },
  }

  const item = {
    hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: [0, 0.5, 1],
        x: [100, -100, 0],
        // transition: { duration: 1 },
      },      
  }

const MobileNav = ({open,toggle}:MobileProp) => {
  return (
    <motion.div 
    initial={{
        width:50
    }} 
    animate={{
        width:open ? '30%':50,
        backgroundColor: open ? "rgb(2,30,49)" : "rgba(3,17,37,0.21)"
        }} className=' bg-[rgba(3,17,37,0.21)] w-[50px] h-full fixed  top-[60px] left-0 z-[20]'>
            <motion.ul  initial="hidden "
                animate={open ? 'visible':'hidden'}
                variants={list} className='h-full w-full flex flex-col justify-start items-center pt-20'>
                     <AnimatePresence initial={false} >
                <motion.li key='home' variants={item} className='text-slate-50 pl-2 font-normal text-center mt-5 md:mt-8'>Home</motion.li>
                <motion.li key='about' variants={item} className='text-slate-50 pl-2 font-normal text-center mt-5 md:mt-8'>About</motion.li>
                <motion.li key='portfolio' variants={item} className='text-slate-50 pl-2 font-normal text-center mt-5 md:mt-8'>Portfolio</motion.li>
                <motion.li key='contact' variants={item} className='text-slate-50 pl-2 font-normal text-center mt-5 md:mt-8'>Contact</motion.li>
                </AnimatePresence>
            </motion.ul>
    </motion.div>
  )
}

export default MobileNav