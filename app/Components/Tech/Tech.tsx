import Image from "next/image"
import react from '../../../public/react.png'
import pytorch from '../../../public/pytorch.png'
import fastapi from '../../../public/fastapi.png'
import r from '../../../public/R.png'
import scikit from '../../../public/scikit.png'
import sql from '../../../public/sql.png'
import powerbi from "../../../public/powerbi.png"
import nodejs from '../../../public/nodejs.png'
import { TechProp } from "./interfaces"
import TechCard from "./TechCard"
import { client } from '@/app/lib/contentful'


async function getTechItems(): Promise<TechProp[]> {
    const response = await client.getEntries({
        content_type: 'tech'
    })

    const techItems: TechProp[] = response.items.map((item,index) => {
        const srcField = item.fields.src as { fields: { file: { url: string } } };
  
        return {
            label: item.fields.label as string,
            alt: item.fields.alt as string,
            src: `https://${srcField.fields.file.url}`,
            index: index
        }
    })


    return techItems
}

const  Tech = async () => {

    const tech_data = await getTechItems()


    return (
        <div className="flex flex-col 
            px-10 md:px-20 lg:px-50 xl:px-80
            md:py-20
            items-left mb-20 gap-10 "
          //  bg-[url('/bg_2.jpg')]  bg-cover bg-center "
            >

            <div>
                <h2 className="text-lg py-1 mt-10 text-left text-gray-600 dark:text-gray-300 font-semibold">My Skills</h2>
                <h3 className="text-5xl md:text-6xl py-1 font-bold text-left text-gray-900 dark:text-white">Technologies.</h3>
                <p className="py-5 text-gray-700 dark:text-gray-400 lg:w-2/3">I&apos;m skilled in a range of modern technologies that enable me to build powerful and efficient solutions, 
                from web applications to backend systems and scalable infrastructure. Here are the key ones I specialize in</p>
            </div>
            <div className="
            flex flex-col 
            items-center mb-20 
            w-full" >
                
                <div className="flex flex-wrap justify-center lg:justify-start items-left w-full   gap-2 md:gap-5 bg-red">
                    {tech_data.map((item,index) => {
                        return (
                                <TechCard src={item.src} alt={item.alt} label={item.label} index={index} key={item.label} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tech