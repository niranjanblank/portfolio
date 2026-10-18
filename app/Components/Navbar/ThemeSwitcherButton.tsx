'use client'
import {useSyncExternalStore} from 'react'
import {useTheme} from 'next-themes'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

export default function ThemeSwitcherButton(){
   
    const {resolvedTheme, setTheme} = useTheme()
    // false during SSR and hydration, true once running on the client
    const mounted = useSyncExternalStore(() => () => {}, () => true, () => false)
   // theme changer function
   const onThemeChangeListener = () => {
    setTheme((resolvedTheme==='dark')?'light':'dark')
  }

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