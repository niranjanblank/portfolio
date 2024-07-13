import PdfRender from "./pdf_render";



export default async function MyCV() {
    return (
        <div className="flex justify-center flex-col container">
                <div className="flex flex-col items-center pb-10">
                <PdfRender/>
            </div>
            
        </div>
    )
}