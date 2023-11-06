import { Suspense } from "react";
import { BlogList } from "./BlogList";
import { BlogListSkeleton } from "../Components/Blog/BlogListSkeleton";

export const revalidate = 10
export default function Blog({
    searchParams }: {
        searchParams: {
            [key: string]: string | string[] | undefined
        }
    }) {

    //  getting the query parameters which will be used for pagination
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page): 1
    const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 6

    return (
        <div className="flex justify-center flex-col container">
                <div className="flex flex-col items-center pb-10">
                <h6 className="text-6xl font-extrabold text-center">Welcome to my Blog!</h6>
                <p className="  text-center  text-2xl mt-3 dark:text-gray-300">
                    Delve into the depth of data, the art of analysis, and the stories that spring from bytes and beliefs. Happy reading!
                </p>
            </div>
            
            <Suspense fallback={<BlogListSkeleton/>}>
                <BlogList page={page} limit={limit}/>
            </Suspense>
            
        </div>
    )
}