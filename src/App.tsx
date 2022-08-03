import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {

  const[isOpen,setIsOpen]=useState<boolean>(false)

  const toggler=()=>{
    setIsOpen(prevState=>!prevState)
  } 

  const closeMenu=():void=>{
    setIsOpen(false)
  }

  return (
    <div>
      <Navbar open={isOpen} toggle={toggler}/>
      <Home open={isOpen} toggle={toggler} close={closeMenu} />
    </div>
  )
}

export default App