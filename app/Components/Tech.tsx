import Image from "next/image"
import react from '../../public/react.png'
import pytorch from '../../public/pytorch.png'
import fastapi from '../../public/fastapi.png'
import r from '../../public/R.png'
const Tech = () => {
    return (
        <div>
            <h3 className="text-3xl py-1 mt-10">Tech I Use</h3>
            <div className="flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-fit">
            <div className="w-24 h-24 relative">
                <Image src={react} layout="fill" objectFit="contain" alt="react" />
            </div>
            <h1>React.JS</h1>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-fit">
            <div className="w-24 h-24 relative">
                <Image src={pytorch} layout="fill" objectFit="contain" alt="pytorch" />
            </div>
            <h1>PyTorch</h1>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-fit">
            <div className="w-24 h-24 relative">
                <Image src={fastapi} layout="fill" objectFit="contain" alt="fastapi" />
            </div>
            <h1>FastAPI</h1>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-fit">
            <div className="w-24 h-24 relative">
                <Image src={r} layout="fill" objectFit="contain" alt="r" />
            </div>
            <h1>R</h1>
            </div>
        </div>
    </div>
    )
}

export default Tech