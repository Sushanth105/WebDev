import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="bg-purple-500 text-[20px] font-bold text-white p-2 flex sm:flex-row flex-col sm:justify-around items-center sm:items-center min-h-15">
            <ul className="flex gap-5 sm:m-0 m-auto">
                <NavLink to={"/"} className={(e)=>{return e.isActive && "bg-red-500"}} ><li className="hover:underline cursor-pointer hover:font-black transition-all duration-500 ease-in-out">Home</li></NavLink>
                <NavLink to={"/About"} className={(e)=>{return e.isActive && "bg-red-500"}} ><li className="hover:underline cursor-pointer hover:font-black transition-all duration-500 ease-in-out">About</li></NavLink>
                <NavLink to={"/ContectUs"} className={(e)=>{return e.isActive && "bg-red-500"}} ><li className="hover:underline cursor-pointer hover:font-black transition-all duration-500 ease-in-out">Contact Us</li></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar