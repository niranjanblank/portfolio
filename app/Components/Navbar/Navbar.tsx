import CvDownloader from './CvDownloader'
import ThemeSwitcherButton from './ThemeSwitcherButton'

const Navbar:React.FC<{}> = async({}) =>{
   
    return (
   
        <nav className="py-10 flex justify-between items-center px-5 sm:px-10 min-w-full absolute ">
          <h1 className="text-xl font-burtons dark:text-white">Niranjan Shah</h1>
          <ul className='flex items-center'>
            <li className="dark:text-white">
              <ThemeSwitcherButton/>
              
              </li>
            <li>
             <CvDownloader/>
              </li>
          </ul>
        </nav>
    )
}

export default Navbar