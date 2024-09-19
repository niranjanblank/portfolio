import Image from "next/image"
import { TechProp } from "./interfaces"

const TechCard: React.FC<TechProp> = (prop) => {
    return (
        <div className="text-center shadow-lg p-5 flex md:flex-grow-0 flex-grow flex-col md:p-10 rounded-xl md:my-10 w-1/3 h-auto md:w-fit md:h-auto bg-white dark:bg-gray-800">
            <div className="w-full h-20 md:w-24  md:h-24 relative">
                <Image src={prop.src}
                fill
                    //  width={1920}
                    //  height={1080}
                     unoptimized={true}
                sizes="100vw"
                className="object-contain" alt={prop.alt} />
            </div>
            <h1 className="text-xs md:text-lg dark:text-white">{prop.label}</h1>
        </div>
    )
}

export default TechCard