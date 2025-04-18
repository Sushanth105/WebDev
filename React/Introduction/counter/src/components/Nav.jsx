import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="bg-purple-500 text-[20px] font-bold text-white p-2 flex sm:flex-row flex-col sm:justify-around items-center sm:items-center min-h-15">
            <picture className="m-auto sm:m-0">
                <img className=' hover:scale-105 cursor-pointer' src={props.logo} alt="React Logo" />
            </picture>
            <ul className="flex gap-5 sm:m-0 m-auto">
                <li className="hover:underline cursor-pointer hover:font-black transition-all duration-500 ease-in-out">Home</li>
                <li className="hover:underline cursor-pointer hover:font-black transition-all duration-500 ease-in-out">About</li>
                <li className="hover:underline cursor-pointer hover:font-black transition-all duration-500 ease-in-out">Contact Us</li>
            </ul>
        </nav>
    );
};

export default NavBar;
