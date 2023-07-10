import Image from "next/image"
import { PortfolioProp } from "./interfaces"
import { BsGithub } from "react-icons/bs"

const PortfolioItem:React.FC<PortfolioProp> = (prop) => {
    return (
    // <a className='shadow-lg rounded-lg
    // transition ease-in-out hover:-translate-y-1  hover:scale-105' href={prop.link}>  
    //     <Image src={prop.src} alt={prop.alt} className='rounded-lg w-full'/>
    // </a>
    <div className='shadow-lg rounded-lg p-4 relative
    transition ease-in-out hover:-translate-y-1  hover:scale-105 dark:bg-gray-800'>
        {/* link for github repo */}
         <a className="absolute text-white right-10 top-10 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center cursor-pointer
         bg-gradient-to-r from-indigo-500 to-indigo-900
         transition ease-in-out hover:-translate-y-1  hover:scale-105
         " 
         href={prop.link}
         >
            <BsGithub className="w-full" size={25}/>
        </a>
        <Image src={prop.src} alt={prop.alt} className='rounded-md w-full'/>
        <div>
            <h1 className="text-3xl font-bold my-4 dark:text-white">{prop.title}</h1>
            <p className="text-black dark:text-gray-400">
            {prop.desc}
            </p>
            <div className="my-3">
                {prop.tags.map(tag=> {
                    return (
                        <span className={`${tag.color} mr-2`} 
                        key={`${prop.title}-${tag.tag}`}
                        >{`#${tag.tag}`}</span>
                    )
                })}
   
            </div>
        </div>
       
    </div>
    )
}

export default PortfolioItem