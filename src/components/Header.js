import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/AviaLogo.png"

export const Header = () => {
  return (
    <header>      
        <nav className="bg-white dark:bg-gray-900">
            <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
               <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-10" alt="Avia" />
                </Link>
                <div className="flex items-center relative">
                    <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                   <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                </div>
            </div>
        </nav>
    </header>
  )
}