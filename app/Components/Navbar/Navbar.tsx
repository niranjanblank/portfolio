"use client"

import Link from 'next/link'
import CvDownloader from './CvDownloader'
import ThemeSwitcherButton from './ThemeSwitcherButton'
import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const Navbar:React.FC<{}> = ({}) =>{
  const [isOpen, setIsOpen] = useState(false);

    return (
   
        <nav className="py-10 flex justify-between items-center px-5 sm:px-10 min-w-full fixed top-0 left-0 
         bg-white dark:bg-zinc-900 z-50
        ">
          <Link href="/"> 
          <h1 className="text-xl font-burtons dark:text-white">Niranjan Shah</h1>
          </Link>


        {/* Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl dark:text-white focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

          <ul className='hidden  sm:flex items-center gap-4 md:gap-10   font-semibold text-xl font-mova'>
            <li className="dark:text-white">
              <ThemeSwitcherButton/>
              
              </li>
              <li >
                <Link 
                  href="/blog" 
                  className="relative dark:text-gray-400 text-gray-700
                          
                            after:block after:h-[2px] after:w-0 
                            after:bg-gray-700 dark:after:bg-gray-400 
                            after:transition-all after:duration-300 after:ease-in-out 
                            hover:after:w-full" 
                >
                  BLOG
                </Link>
               </li>
               <li >
                <Link 
                  href="/#projects" 
                  className="relative dark:text-gray-400 text-gray-700
                            after:block after:h-[2px] after:w-0 
                            after:bg-gray-700 dark:after:bg-gray-400 
                            after:transition-all after:duration-300 after:ease-in-out 
                            hover:after:w-full" 
                >
                  PROJECTS
                </Link>
               </li>
            <li>
             <CvDownloader/>
              </li>
          </ul>

          <MobileMenu isOpen={isOpen} toggleMenu={() => setIsOpen(false)} />
        </nav>
    )
}

export default Navbar