import Image from "next/image"
import { PortfolioProp } from "./interfaces"

const PortfolioItem:React.FC<PortfolioProp> = (prop) => {
    return (
    <a className='shadow-lg rounded-lg
    transition ease-in-out hover:-translate-y-1  hover:scale-105' href={prop.link}>  
        <Image src={prop.src} alt={prop.alt} className='rounded-lg w-full'/>
    </a>
    )
}

export default PortfolioItem