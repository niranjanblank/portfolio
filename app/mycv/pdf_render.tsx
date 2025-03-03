'use client'
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import { FiDownload } from 'react-icons/fi';
import { cvDownloadHandler } from "@/app/lib/utils"


import {useTheme} from 'next-themes'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfRender:React.FC = () => {
  const [numPages, setNumPages] = useState<number>();
  const [cvFile,setcvFile] = useState("niranjan_resume.pdf")


  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div> 
      <Document file={cvFile} onLoadSuccess={onDocumentLoadSuccess}>
     {Array.apply(null, Array(numPages))
    .map((x, i)=>i+1)
    .map(page => <Page 
    className="mb-2"
    pageNumber={page} key={page} scale={2}  renderTextLayer={true} renderAnnotationLayer={false}/>)}
      </Document>

      {/* Download button to download the cv */}
      <div className="fixed bottom-5 right-5">
      <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" onClick={cvDownloadHandler}>
        <FiDownload className="w-6 h-6" />
      </button>
    </div>
    </div>
  );
}

export default PdfRender