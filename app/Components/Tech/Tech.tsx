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
const Tech = () => {

    const tech_items:TechProp[] = [
        {src: react, alt:'react', label:'ReactJS'},
        {src: nodejs, alt:'nodejs', label:'NodeJS'},
        {src: fastapi, alt:'fastapi', label:'FastAPI'},
        {src: pytorch, alt:'pytorch', label:'PyTorch'},
        {src: r, alt:'r', label:'R'},
        {src: sql, alt:'sql', label:'SQL'},
        {src: scikit, alt:'scikit', label:'Scikit-learn'},
        {src: powerbi, alt:'powerbi', label:'Power BI'}
    ] 

    return (
        <div className="flex flex-col items-center mb-20" >
            <h3 className="text-3xl py-1 mt-10 dark:text-white">Tech I Use</h3>
            <div className="flex flex-wrap justify-center items-center max-w-6xl gap-2 md:gap-10">
                {tech_items.map(item => {
                    return (
                     
                            <TechCard src={item.src} alt={item.alt} label={item.label} key={item.label} />
                        
                    );
                })}
            </div>
        </div>
    )
}

export default Tech