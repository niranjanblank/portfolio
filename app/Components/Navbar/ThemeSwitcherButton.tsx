'use client'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

export default function ThemeSwitcherButton(){
   
    const {resolvedTheme, setTheme} = useTheme()
    const [mounted,setMounted] = useState(false)
   // theme changer function
   const onThemeChangeListener = () => {
    setTheme((resolvedTheme==='dark')?'light':'dark')
  }

    useEffect(() => {
      setMounted(true)

    }, [])
  
    if (!mounted) {
      return null
    }
    return (
        <>
        {
              (resolvedTheme=='dark')? (<BsFillSunFill onClick={onThemeChangeListener} className='cursor-pointer text-xl'/>) :(<BsFillMoonStarsFill onClick={onThemeChangeListener} className='cursor-pointer text-xl'/>)
              }
        </>
    )
}