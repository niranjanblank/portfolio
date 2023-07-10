import Image from "next/image"
import { TechProp } from "./interfaces"

const TechCard: React.FC<TechProp> = (prop) => {
    return (
        <div className="text-center shadow-lg p-10 rounded-xl my-10 w-fit bg-white dark:bg-gray-800">
            <div className="w-24 h-24 relative">
                <Image src={prop.src} fill 
                sizes="33vw"
                className="object-contain" alt={prop.alt} />
            </div>
            <h1 className="dark:text-white">{prop.label}</h1>
        </div>
    )
}

export default TechCard