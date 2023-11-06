export function BlogCardSkeleton() {
    return (
        <div className="flex flex-col m-2  dark:bg-gray-700 rounded-lg shadow-lg animate-pulse">
            <div className="relative h-72 md:h-50 bg-gray-300 rounded-tl-lg rounded-tr-lg"></div>
            <div className="px-5 py-5 space-y-4">
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded w-full"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="flex flex-wrap gap-2 py-2">
                    <div className="h-4 bg-gray-500 px-4 rounded-md"></div>
                    <div className="h-4 bg-gray-500 px-3 rounded-md"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    )
}
