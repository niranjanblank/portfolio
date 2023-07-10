import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import {saveAs} from 'file-saver'
const Navbar:React.FC<{
  onThemeChangeListener: () => void,
  darkMode: boolean

}> = ({onThemeChangeListener, darkMode}) =>{

    const cvDownloadHandler = () => {
      saveAs('/niranjanshah_cv.pdf','niranjanshah_cv.pdf')
    }

    return (
   
        <nav className="py-10 mb-12 flex justify-between items-center">
          <h1 className="text-xl font-burtons dark:text-white">Niranjan Shah</h1>
          <ul className='flex items-center'>
            <li className="dark:text-white">
              {
              (darkMode)? (<BsFillSunFill onClick={onThemeChangeListener} className='cursor-pointer text-xl'/>) :(<BsFillMoonStarsFill onClick={onThemeChangeListener} className='cursor-pointer text-xl'/>)
              }
              
              </li>
            <li>
              <button 
              onClick={cvDownloadHandler}
              className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white px-4 py-2 rounded-md ml-8">Resume</button>
              </li>
          </ul>
        </nav>
    )
}

export default Navbar