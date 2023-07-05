
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Tech from './Components/Tech/Tech'
import recommerder_system from '../public/recommender_system.png'
import sentiment from '../public/sentiment.png'
import plant_vision from '../public/plant_vision.png'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white px-10 md:px-20 lg:px-40' >
      <section className="min-h-screen flex flex-col">
        <Navbar/>
        <div className="flex-grow flex items-center justify-center">
         <Intro/>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Things about me</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey in the world of Data Science/Machine Learning, I've done lots of projects
            regarding <span className="text-teal-500"> Data Analysis</span>, <span className="text-teal-500"> Natural Language Processing</span>
            , <span className="text-teal-500"> Computer Vision</span> and many more.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
           I am also interested in playing video games, reading light novels and playing guitar.
          </p>
        </div>
        <Tech/>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">Some of my works highlighting my skills are here</p>
        </div>
        <div>
          <div>  
            <Image src={recommerder_system} alt="recommender_system"/>
          </div>
          <div>  
            <Image src={sentiment} alt="sentiment"/>
          </div>
          <div>  
            <Image src={plant_vision} alt="plant_vision"/>
          </div>
        </div>
      </section>
    </main>
  )
}
