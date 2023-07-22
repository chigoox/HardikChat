import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiOutlineInsertRowAbove } from "react-icons/ai";
import './App.css'
import Home from './Pages/Home';
import { color } from './MyCodes/colors';
import LOGO from '../src/assets/LOGO.png'

function App() {


  return (
    <div className={`App h-full w-full bg-[${color[0]}]`}>
      <div className='bg-blue-700 flex center'>
        <img className='border-4 border-yellow-400 h-14 w-14 object-cover rounded-full' src={LOGO} alt="" />
        <h1 className={`text-yellow-400 text-xl font-bold`} > Hardik Chat</h1>
      </div>
      <Home />

    </div >
  )
}

export default App
