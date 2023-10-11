import { Suspense } from "react";
import { BlogList } from "./BlogList";
import { BlogListSkeleton } from "../Components/Blog/BlogListSkeleton";

export const revalidate = 10
export default function Blog() {
    return (
        <div className="flex justify-center flex-col container">
                <div className="flex flex-col items-center pb-10">
                <h6 className="text-6xl font-extrabold text-center">Welcome to my Blog!</h6>
                <p className="  text-center  text-2xl mt-3 dark:text-gray-300">
                    Delve into the depth of data, the art of analysis, and the stories that spring from bytes and beliefs. Happy reading!
                </p>
            </div>
            <Suspense fallback={<BlogListSkeleton/>}>
                <BlogList/>
            </Suspense>
            
        </div>
    )
}