import {FiMail} from "react-icons/fi"
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
import ContactForm from "./ContactForm"
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai"


const Footer = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-white dark:text-white dark:bg-gray-900 p-10 ">
            <div className="w-full  flex flex-col sm:items-center md:items-end p-3 md:gap-10">
                
                <h1 className=" font-bold text-6xl">Niranjan Shah</h1>
                
                <p className="flex items-center gap-2 text-2xl "><FiMail/> niranjashah474@gmail.com</p>
                <p className="flex items-center gap-2 text-2xl "><FaMapMarkerAlt/> Canberra, ACT, Australia</p>
                <p className="flex items-center gap-2 text-2xl "><FaPhoneAlt/> (+61)432518736</p>
                
                <div className="text-5xl flex  gap-5 text-black-600 dark:text-white">
                        <a href="https://www.facebook.com/niranjanBlanK/" className="cursor-pointer"><AiFillFacebook/></a>
                        <a href="https://www.linkedin.com/in/niranjan-shah-7037921a4/" className="cursor-pointer"><AiFillLinkedin/></a>
                        <a href="https://github.com/niranjanblank" className="cursor-pointer"><AiFillGithub/></a>
                </div>
                
                
            </div>
            
            {/* contact form */}
            <ContactForm/>
        </div>
    )
}

export default Footer