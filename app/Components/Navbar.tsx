import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

const Navbar:React.FC<{
  onThemeChangeListener: () => void,
  darkMode: boolean

}> = ({onThemeChangeListener, darkMode}) =>{
    return (
   
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-white">Niranjan Shah</h1>
          <ul className='flex items-center'>
            <li className="dark:text-white">
              {
              (darkMode)? (<BsFillSunFill onClick={onThemeChangeListener} className='cursor-pointer text-xl'/>) :(<BsFillMoonStarsFill onClick={onThemeChangeListener} className='cursor-pointer text-xl'/>)
              }
              
              </li>
            <li>
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8">Resume</a>
              </li>
          </ul>
        </nav>
    )
}

export default Navbar