import Logo from '../assets/Logo.svg'
import Logobuho from '../assets/Logobuho.svg'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

import {CgSearch} from "react-icons/cg"


export const Header = () => {

    const [nav, setNav] = useState (false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
    <div className=' mx-auto'>    
        <header className="flex flex-shrink justify-between flex-auto h-24 bg-slate-900">
            <img className="w-16 md:w-32 lg:w-80 hidden md:block" src={Logo} alt="Logo" />
            <img className="w-24 md:hidden lg:hidden" src={Logobuho} alt="Logo" />

                {/*navbar*/}
        <div className="flex justify-between items-center h-24 text-white bg-slate-900">
            <ul className=" hidden md:flex ">

                <li className=" p-10 text-2xl"> <a href="#">INICIO</a> </li>

                <li className=" p-10 text-2xl"> <a href="#">ARTICULOS</a> </li>

                <li className=" p-10 text-2xl"> <a href="#">EMPRENDIMIENTOS</a> </li>
            </ul>

            {/* search bar*/}  
            <form className="flex-shrink w-[540px] relative  place-self-center ">
            <div className="relative">
                <input type="search" placeholder="type here" className=" w-96 p-4 rounded-full bg-slate-800" />
                <button className=" flex absolute right-44 top-1/2 -translate-y-1/2 p-3 bg-slate-500 rounded-full" >
                <CgSearch />
                </button>
            </div>
            
            <div className="absolute top-20 p-4 bg-slate-800 text-white w-96
            rounded-xl left-48 -translate-x-1/2 flex flex-col gap-2">
            </div>
            </form>
            
            

            <div onClick={handleNav} className='block md:hidden relative right-24 '>
                {!nav ? <AiOutlineClose size={1}/> : <AiOutlineMenu size={30} color='white' />}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-black bg-slate-600 ease-in-out duration-500' :'fixed left-[100%]' }>
            <div onClick={handleNav} className='absolute right-0 rounded-lg bg-red-600'>
                {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={20} color='white' />}
            </div>
            <ul className="uppercase p-4 ">

                <li className=" p-4"> <a href="#">INICIO</a> </li>

                <li className=" p-10 text-2xl"> <a href="#">PERFIL</a> </li>

                <li className=" p-4"> <a href="#">ARTICULOS</a> </li>

                <li className=" p-4"> <a href="#">EMPRENDIMIENTOS</a> </li>
                
            </ul>
            </div>

            {/*profile pic button*/}
            <div className=" relative hidden md:block">
                <button className="absolute right-8 top-1/2 
                -translate-y-1/2 p-6 bg-black rounded-full" >    
                </button>
            </div>

        </div>      
        
        </header>
    </div>    
    )
}



