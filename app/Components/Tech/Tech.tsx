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

    const techItems: TechProp[] = response.items.map(item => {
        const srcField = item.fields.src as { fields: { file: { url: string } } };
  
        return {
            label: item.fields.label as string,
            alt: item.fields.alt as string,
            src: `https://${srcField.fields.file.url}`,
        }
    })


    return techItems
}

const  Tech = async () => {

    const tech_data = await getTechItems()


    return (
        <div className="flex flex-col items-center mb-20" >
            <h3 className="text-3xl py-1 mt-10 dark:text-white">Tech I Use</h3>
            <div className="flex flex-wrap justify-center items-center max-w-6xl gap-2 md:gap-10">
                {tech_data.map(item => {
                    return (
                     
                            <TechCard src={item.src} alt={item.alt} label={item.label} key={item.label} />
                        
                    );
                })}
            </div>
        </div>
    )
}

export default Tech