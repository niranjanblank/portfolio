import { BsFillMoonStarsFill } from "react-icons/bs"

const Navbar = () =>{
    return (
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Niranjan Shah</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
              </li>
            <li>
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8">Resume</a>
              </li>
          </ul>
        </nav>
      </section>
    )
}

export default Navbar