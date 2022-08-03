import React from 'react'
import './style.css'
import MobileNav from '../components/MobileNav'
import {motion} from 'framer-motion'

interface HomeProp{
    open:boolean
    toggle():void
    close():void
}

const Home = ({open,toggle,close}:HomeProp) => {


  return (
    <div className='w-full h-[100vh] mt-[-60px] bg '>
        <MobileNav open={open} toggle={toggle} />
        <div  className='w-full h-[100vh] mt-[-60px] bg2'>
            <div className={`w-full h-[100vh]  flex justify-center items-end pb-20 ${open  ? 'bg3':'bg3'} `}  onClick={close}>
                <motion.div animate={{scale:1,opacity:1}} initial={{scale:0,opacity:0}} transition={{duration:1.5}} className='flex flex-col justify-center items-center  relative'>
                <motion.p initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:3,duration:1.5}} className='text-slate-50 text-xl '>Hi, I am</motion.p> 
                <motion.h1 initial={{scale:0,opacity:0}} animate={{scale:[2,0,1],opacity:1}} transition={{delay:3,duration:1.5}} className='uppercase text-3xl md:text-5xl text-white font-bold mt-2 md:mt-4 font-sans'>aghoghovwia <span className='hidden md:inline-block'>andrew</span> </motion.h1>
                <motion.h2 initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:3,duration:1.5}} className='uppercase text-xl md:hidden text-white font-bold mt-2 md:mt-4 font-sans'>andrew</motion.h2>
                <motion.p initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:3,duration:1.5}} className='text-sm md:text-xl text-slate-100 w-full md:w-[70%] mt-4 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iure quibusdam maiores veniam. Praesentium, illum eveniet rem ea maxime harum.</motion.p>

                <motion.button whileHover={{
                scale: 1.2                
            }}
  whileTap={{ scale: 0.9 }}  className='py-2 px-10 md:px-16 border-0  mt-4 bg-slate-600 text-slate-50'>Download CV</motion.button>
            <motion.div animate={{y:50,opacity:0}} transition={{delay:1.7,duration:1}} className='w-full  py-5 left-0 right-0 h-full   flex justify-center items-center      absolute '>
                <span className='text-slate-50 text-4xl uppercase'>Welcome</span>
            </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Home