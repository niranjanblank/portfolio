"use client"

import Image from "next/image"
import { TechProp } from "./interfaces"
import {motion} from "framer-motion"


// Define animation variants with delayed initial animation
const cardVariants = {
    hidden: (index: number) => ({ opacity: 0, x: 50 }),
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: index * 0.1 } // Delay only on entrance
    }),
};

const TechCard: React.FC<TechProp> = (prop) => {
    return (
            <motion.div 
            custom={prop.index} // Pass index to variants
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            // whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.02 }} // No delay on hover
            variants={cardVariants} // Use variants
            className="text-center shadow-sm p-5 flex md:flex-grow-0 flex-grow flex-col md:p-10 rounded-xl  
            w-1/3 h-auto md:w-fit md:h-auto 
            bg-white dark:bg-zinc-800
            hover:bg-gray-100 hover:dark:bg-zinc-700 
            border dark:border-transparent
            hover:border hover:dark:border-gray-600
            hover:border-gray-200"
        >

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
        </motion.div>
    )
}

export default TechCard