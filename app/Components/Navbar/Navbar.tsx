'use client'
import {saveAs} from 'file-saver'
import ThemeSwitcherButton from './ThemeSwitcherButton'


const Navbar:React.FC<{

}> = ({}) =>{
    const cvDownloadHandler = () => {
      saveAs('/niranjanshah_cv.pdf','niranjanshah_cv.pdf')
    }

    return (
   
        <nav className="py-10 flex justify-between items-center px-10 min-w-full absolute ">
          <h1 className="text-xl font-burtons dark:text-white">Niranjan Shah</h1>
          <ul className='flex items-center'>
            <li className="dark:text-white">
              <ThemeSwitcherButton/>
              
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