import Image from "next/image"
import react from '../../../public/react.png'
import pytorch from '../../../public/pytorch.png'
import fastapi from '../../../public/fastapi.png'
import r from '../../../public/R.png'
import scikit from '../../../public/scikit.png'
import sql from '../../../public/sql.png'
import { TechProp } from "./interfaces"
import TechCard from "./TechCard"
const Tech = () => {

    const tech_items:TechProp[] = [
        {src: react, alt:'react', label:'React.Js'},
        {src: fastapi, alt:'fastapi', label:'FastAPI'},
        {src: pytorch, alt:'pytorch', label:'PyTorch'},
        {src: r, alt:'r', label:'R'},
        {src: sql, alt:'sql', label:'SQL'},
        {src: scikit, alt:'scikit', label:'Scikit-learn'}
    ] 

    return (
        <div className="flex flex-col md:items-center" >
            <h3 className="text-3xl py-1 mt-10 dark:text-white">Tech I Use</h3>
            <div className="flex flex-wrap justify-center items-center">
                {tech_items.map(item => {
                    return (
                        <div className="m-2 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                            <TechCard src={item.src} alt={item.alt} label={item.label}/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Tech