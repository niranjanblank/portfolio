
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'


export default function Home() {
  return (
    <main className='bg-white px-10' >
      {/* Navbar */}
      <section className="min-h-screen">
      <Navbar/>
      <Intro/>
      </section>
    </main>
  )
}
