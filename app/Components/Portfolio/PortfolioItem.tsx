import Image from "next/image"
import { PortfolioProp } from "./interfaces"
import { BsGithub } from "react-icons/bs"

const PortfolioItem:React.FC<PortfolioProp> = (prop) => {
    return (
    <div className='flex flex-col items-center gap-2 shadow-lg rounded-lg bg-white'>  
        <Image src={prop.src} alt={prop.alt} className='rounded-t w-full'/>
        <h2>{prop.title}</h2>
        <a className="text-white flex mb-2 bg-teal-600 w-fit px-10 py-1 text-lg md:text-2xl rounded-lg" href={prop.link}><BsGithub/></a>
    </div>
    )
}

export default PortfolioItem