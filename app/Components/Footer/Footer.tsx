

const Footer = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-white dark:bg-gray-900 p-10 ">
            <div className="w-full font-burtons text-sky-500 text-2xl flex flex-col items-center p-3">
                Info About Me
            </div>
            <div className="  bg-real-500 rounded-lg py-3 px-5  max-w-xl   flex flex-col">
                <h2 className="font-bold text-4xl pb-2 dark:text-white">Let's Chat: Unlocking Possibilities</h2>
                <p className="text-sm dark:text-gray-200" >Need assistance? Don't worry, I'm here to catch your queries like a ninja catches shurikens. Fill out the form below, and let the problem-solving begin!</p>
                <form className="flex flex-col gap-4 text-black dark:text-gray-200 text-sm mt-4">
                    <div>
                        <label className="block ">Full name</label>
                        <input className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" placeholder="Name"/>
                    </div>
                    <div>
                        <label className="block ">Subject</label>
                        <input className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" placeholder="Name"/>
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <input className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" placeholder="Name"/>
                    </div>
                    <div>
                        <label className="block">Message</label>
                        <textarea className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" rows={4} placeholder="What do you want to say"></textarea>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-sky-400 px-4 text-white py-2 rounded-md w-fit flex">Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default Footer