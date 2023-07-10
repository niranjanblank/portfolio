import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    // Provide a default value or handle the case where the form ID is not defined
    if (!formId) {
        throw new Error('Form ID not defined in environment variables.');
    }

    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
       console.log("Email sent")
    }
    return (
        <div className="rounded-lg py-3 md:px-5  max-w-xl   flex flex-col">
                <h2 className="font-bold text-4xl pb-2 dark:text-white">Let&apos;s Chat: Unlocking Possibilities</h2>
                <p className="text-sm dark:text-gray-200" >Need assistance? Don&apos;t worry, I&apos;m here to catch your queries like a ninja catches shurikens. Fill out the form below, and let the problem-solving begin!</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black dark:text-gray-200 text-sm mt-4">
                    <div>
                        <label className="block ">Full name</label>
                        <input className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" placeholder="e.g. Richard Parker" name="name" type="text"/>
                    </div>
                    <div>
                        <label className="block ">Subject</label>
                        <input className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" placeholder="e.g. Help me do this project " name="subject" type="text"/>
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <input className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" placeholder="e.g. richardp@example.com" name="email" type="email"/>
                    </div>
                    <div>
                        <label className="block">Message</label>
                        <textarea className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" rows={4} placeholder="e.g. Lets work together" name="message"></textarea>
                    </div>
                    <button type="submit" disabled={state.submitting} className="bg-gradient-to-r from-cyan-500 to-sky-400 px-4 text-white py-2 rounded-md w-fit flex">Send Email</button>
                    <ValidationError errors={state.errors}/>
                </form>
            </div>
    )
}

export default ContactForm