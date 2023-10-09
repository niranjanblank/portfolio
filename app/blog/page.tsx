import { BlogList } from "./BlogList";


export default function Blog() {
    return (
      <main className='flex flex-col pt-40 bg-white px-10 md:px-20 lg:px-40 min-h-screen gap-10  dark:bg-gray-900 pb-10 ' >
        <BlogList/>
      </main>
      
    )
}