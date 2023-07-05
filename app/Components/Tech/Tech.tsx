import Image from "next/image"
import react from '../../../public/react.png'
import pytorch from '../../../public/pytorch.png'
import fastapi from '../../../public/fastapi.png'
import r from '../../../public/R.png'
import { TechProp } from "./interfaces"
import TechCard from "./TechCard"
const Tech = () => {

    const tech_items:TechProp[] = [
        {src: react, alt:'react', label:'React.Js'},
        {src: fastapi, alt:'fastapi', label:'FastAPI'},
        {src: pytorch, alt:'pytorch', label:'PyTorch'},
        {src: r, alt:'r', label:'R'}
    ] 

    return (
        <div>
            <h3 className="text-3xl py-1 mt-10">Tech I Use</h3>
            <div className="flex gap-10">
                {tech_items.map(item=>{
                    return (<TechCard src={item.src} alt={item.alt} label={item.label}/>)
                })}
            </div>
        </div>
    )
}

export default Tech