import Link from 'next/link'
import CvDownloader from './CvDownloader'
import ThemeSwitcherButton from './ThemeSwitcherButton'

const Navbar:React.FC<{}> = async({}) =>{
   
    return (
   
        <nav className="py-10 flex justify-between items-center px-5 sm:px-10 min-w-full absolute ">
          <Link href="/"> <h1 className="text-xl font-burtons dark:text-white">Niranjan Shah</h1></Link>
          <ul className='flex items-center gap-4 md:gap-10'>
            <li className="dark:text-white">
              <ThemeSwitcherButton/>
              
              </li>
              <li >
                <Link href="/blog" className="dark:text-gray-400">Blog</Link>
              </li>
            <li>
             <CvDownloader/>
              </li>
          </ul>
        </nav>
    )
}

export default Navbar