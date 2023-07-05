import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillFacebook
    } from 'react-icons/ai'

import Image from "next/image"
import centralImage from "../../public/central_image.png"

const Intro = () => {
    return (
        <div>
        <div className="text-center p-10  dark:text-white "> 
            <h2 className='text-5xl py-2 text-sky-500 font-medium md:text-6xl'>
            Niranjan Shah
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Data Scientist/ Machine Learning Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
            AI enthusiast, currently studying at the University of Canberra. 
            Skilled in all aspects of Data Science and ML. See my works below.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 pb-10 text-gray-600 dark:text-gray-400">
            <a href="https://www.facebook.com/niranjanBlanK/" className="cursor-pointer"><AiFillFacebook/></a>
            <a href="https://www.linkedin.com/in/niranjan-shah-7037921a4/" className="cursor-pointer"><AiFillLinkedin/></a>
            <a href="https://github.com/niranjanblank" className="cursor-pointer"><AiFillGithub/></a>
        </div>
        <div className=" mx-auto rounded-full w-80 h-80 md:h-96 md:w-96"  >
            <Image src={centralImage} alt="" />
        </div>
    </div>
    )
}

export default Intro