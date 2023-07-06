const Footer = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-white dark:bg-gray-900 p-10">
            <div className="w-full font-burtons text-sky-500 text-2xl flex flex-col items-center p-3">
                Info About Me
            </div>
            <div className="w-full  bg-sky-500 rounded-lg py-3 px-5  text-white shadow-lg flex flex-col">
                <h2 className="font-bold text-4xl pb-2">Let's Chat: Unlocking Possibilities</h2>
                <p className="text-sm text-gray-200" >Need assistance? Don't worry, I'm here to catch your queries like a ninja catches shurikens. Fill out the form below, and let the problem-solving begin!</p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer