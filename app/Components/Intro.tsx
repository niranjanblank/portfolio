import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillFacebook
    } from 'react-icons/ai'

import Image from "next/image"
import centralImage from "../../public/central_image.png"

const Intro = () => {
    return (
        <>
        <div className="text-center p-10"> 
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>
          Niranjan Shah
        </h2>
        <h3 className="text-2xl py-2">Data Scientist/ Machine Learning Engineer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          AI enthusiast, currently studying at the University of Canberra. 
          Skilled in all aspects of Data Science and ML. See my works below.</p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillFacebook/>
        <AiFillLinkedin/>
        <AiFillGithub/>
      </div>
      <div className=" mx-auto rounded-full w-80 h-80" >
        <Image src={centralImage} alt="" />
      </div>
        </>
    )
}

export default Intro