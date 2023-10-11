import { BlogList } from "./BlogList";

export const revalidate = 10
export default function Blog() {
    return (
        <div className="flex justify-center container">
            <BlogList/>
        </div>
    )
}