import ContactForm from "./ContactForm"


const Footer = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-white dark:bg-gray-900 p-10 ">
            <div className="w-full font-burtons text-sky-500 text-2xl flex flex-col items-center p-3">
                Info About Me
            </div>
            
            {/* contact form */}
            <ContactForm/>
        </div>
    )
}

export default Footer