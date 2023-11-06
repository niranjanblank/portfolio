import { BlogCardSkeleton } from "./BlogCardSkeleton";

export  function BlogListSkeleton() {

    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
            </div>
    )
}