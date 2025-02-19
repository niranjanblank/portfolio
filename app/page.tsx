import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Portfolio from './Components/Portfolio/Portfolio'
import Tech from './Components/Tech/Tech'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export const revalidate = 10
export default function Home() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        />
    <main className='flex flex-col pt-20 bg-white  dark:bg-zinc-900 pb-10 '  >
        <section 
        id="intro"
        className="flex-grow flex items-center min-h-screen justify-center px-10 md:px-20 lg:px-50 xl:px-80 ">
          <Intro/>
        </section>

        <section> 
          <AboutMe/>
          <Tech/>
        </section>
        <section 
        id="projects"
        className='px-10 md:px-20 lg:px-50 xl:px-80 '>
          <Portfolio/>
        </section>    
    </main>
    <Footer/>
    </div>
  )
}
