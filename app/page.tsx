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
    <main className='flex flex-col pt-20 bg-white px-10 md:px-20 lg:px-40  dark:bg-gray-900 pb-10 '  >
        <section className="flex-grow flex items-center min-h-screen justify-center">
          <Intro/>
        </section>

        <section>
          <AboutMe/>
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
