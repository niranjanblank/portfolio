import { useForm, ValidationError } from "@formspree/react";
import { useFormik } from "formik";
import * as Yup from "yup"

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
          name: '',
          subject: '',
          email: '',
          message: ''
        },
        onSubmit: async (values) => {
          try {
            // const response = await axios.post('/api/email', values);
            // setMailSent(response.data.isMailSent)
            // if(response.data.isMailSent){
            //   toast.success("Mail Sent")
            //   setMailSent(false)
            // }
            // console.log(response.data);
          } catch (error) {
            // console.error(error);
          }
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          subject: Yup.string()
            .required("Required"),
          email: Yup.string()
            .email("Valid Email Required").required("Required"),
          message: Yup.string().required("Message Required")
        })
      });

 
    return (
        <div className="rounded-lg py-3 md:px-5  max-w-xl   flex flex-col">
                <h2 className="font-bold text-4xl pb-2 dark:text-white">Let&apos;s Chat: Unlocking Possibilities</h2>
                <p className="text-sm dark:text-gray-200" >Need assistance? Don&apos;t worry, I&apos;m here to catch your queries like a ninja catches shurikens. Fill out the form below, and let the problem-solving begin!</p>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 text-black dark:text-gray-200 text-sm mt-4">
                    <div>
                        <label className="block ">Full name</label>
                        <input 
                        className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" 
                        placeholder="e.g. Richard Parker" 
                        name="name" type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {(formik.touched.name && formik.errors.name) && <p className="text-red-600 pt-2 text-xs">{formik.errors.name}</p>}
                    </div>
                    <div>
                        <label className="block ">Subject</label>
                        <input 
                        className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" 
                        placeholder="e.g. Help me do this project " 
                        name="subject" type="text"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {(formik.touched.subject && formik.errors.subject) && <p className="text-red-600 pt-2 text-xs">{formik.errors.subject}</p>}
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <input 
                        className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" 
                        placeholder="e.g. richardp@example.com" 
                        name="email" type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {(formik.touched.email && formik.errors.email) && <p className="text-red-800 pt-2 text-xs">{formik.errors.email}</p>}
                    </div>
                    <div>
                        <label className="block">Message</label>
                        <textarea 
                        className="block bg-gray-200 w-full rounded-sm py-2 px-2 text-black" rows={4}
                        placeholder="e.g. Lets work together" 
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        ></textarea>
                        {(formik.touched.message && formik.errors.message) && <p className="text-red-800 pt-2 text-xs">{formik.errors.message}</p>}
                    </div>
                    <button type="submit"  className=" bg-sky-400 hover:bg-sky-700 px-4 text-white py-2 rounded-md w-fit flex">Send Email</button>

                </form>
            </div>
    )
}

export default ContactForm