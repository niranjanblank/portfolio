import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillFacebook
    } from 'react-icons/ai'

import Image from "next/image"
// import centralImage from "../../public/central_image.png"
import profile_image from "../../../public/profile_image.jpg"
import { IntroProp } from './interfaces'
import { client } from '@/app/lib/contentful'

async function getIntro(): Promise<IntroProp> {
    const response = await client.getEntries({
        content_type: 'intro',
        'fields.slug': 'profile_1',
    })


  // Ensure there's at least one item in the response
  if (response.items.length === 0) {
    throw new Error(`No profile data found`);
}

const item = response.items[0];
const srcField = item.fields.profileImage as { fields: { file: { url: string } } };
return {
    title: item.fields.title as string,
    desc: item.fields.desc as string,
    profile_image: `https://${srcField.fields.file.url}`,
}
}


const Intro = async () => {

    const intro_data = await getIntro()
   
    return (
        <div className='flex flex-col-reverse justify-center items-center md:flex-row'>
            <div className='flex flex-col items-center justify-start'>
                <div className="text-center p-10  dark:text-white "> 
                    <h2 className='text-5xl py-2 text-sky-500 font-bold md:text-6xl lg:text-7xl font-mova'>
                    NIRANJAN SHAH
                    </h2>
                    <h3 className="text-2xl py-2 md:text-3xl">{intro_data.title}</h3>
                    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
                        {intro_data.desc}
                    </p>
                </div>
                <div className="text-5xl flex justify-center gap-16 pb-10 text-gray-600 dark:text-gray-400">
                    <a href="https://www.facebook.com/niranjanBlanK/" className="cursor-pointer"><AiFillFacebook/></a>
                    <a href="https://www.linkedin.com/in/niranjan-shah/" className="cursor-pointer"><AiFillLinkedin/></a>
                    <a href="https://github.com/niranjanblank" className="cursor-pointer"><AiFillGithub/></a>
                </div>
            </div>

            <div className="mx-auto mt-2 rounded-full w-64 h-64 md:h-96 md:w-80 lg:w-96 lg:h-[500px]" >
                {/* <Image src={centralImage} alt="" /> */}
                <Image src={intro_data.profile_image} alt="profile image" 
                width={96}
                height={96}
                unoptimized={true}
                priority={true}
                className='rounded-full w-64 h-64 md:h-96 md:w-80 lg:w-96 lg:h-[500px] object-cover object-top '/>
            </div>
     
    </div>
    )
}

export default Intro