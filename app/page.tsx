import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <main >
      {/* Navbar */}
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1>Niranjan Shah</h1>
          <ul>
            <li><BsFillMoonStarsFill/></li>
            <li>< a href="#">Resume</a></li>
          </ul>
        </nav>
      </section>
    </main>
  )
}
