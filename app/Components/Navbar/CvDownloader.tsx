'use client'
import {saveAs} from 'file-saver'
export default function CvDownloader() {
    const cvDownloadHandler = () => {
        saveAs('/niranjanshah_cv.pdf','niranjanshah_cv.pdf')
      }
    return (
        <button 
        onClick={cvDownloadHandler}
        className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white px-4 py-2 rounded-md">Resume</button>
    )
}