"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [active, setActive] = useState("home");

  const getClass = (name: string): string =>{
    return `cursor-pointer ${active === name && 'text-red-500'}`;
  }
  return (
    <nav>
      <ul className="bg-purple-400 flex gap-7 text-xl h-10 justify-center items-center">
        <li className={getClass("home")}>
          <Link onNavigate={() => setActive("home")} href="/">Home</Link>
        </li>
        <li className={getClass("about")}>
          <Link onNavigate={() => setActive("about")} href="/about">About</Link>
        </li>
        <li className={getClass("contact")}>
          <Link onNavigate={() => setActive("contact")} href="/contact" replace>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
