'use client'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Tech from './Components/Tech/Tech'

import { useState } from 'react'


export default function Home() {


  const [darkMode, setDarkMode] = useState(false)

  // theme changer function
  const onThemeChangeListener = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark": ""}>
    <main className='bg-white px-10 md:px-20 lg:px-40  dark:bg-gray-900 pb-10' >
        <section className="min-h-screen flex flex-col">
          <Navbar onThemeChangeListener={onThemeChangeListener} darkMode={darkMode}/>
          <div className="flex-grow flex items-center justify-center">
          <Intro/>
          </div>
        </section>

        <section>
          <div className="md:text-center ">
            <h3 className="text-3xl py-1 dark:text-white ">Things about me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl">
              Since the beginning of my journey in the world of Data Science/Machine Learning, I&apos;ve done lots of projects
              regarding <span className="text-teal-500"> Data Analysis</span>, <span className="text-teal-500"> Natural Language Processing</span>
              , <span className="text-teal-500"> Computer Vision</span> and many more.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl">
            I am also interested in playing video games, reading light novels and playing guitar.
            </p>
          </div>
          <Tech/>
        </section>
        <section>
        <Portfolio/>
        </section>    
    </main>
    <Footer/>
    </div>
  )
}
