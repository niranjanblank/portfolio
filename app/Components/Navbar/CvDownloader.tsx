'use client'
import { cvDownloadHandler } from "@/app/lib/utils"
import { useRouter } from 'next/navigation'

import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default function CvDownloader() {
  const { width } = useWindowSize();
  const router = useRouter();

  const handleButtonClick = () => {
    if (width > 1024 ) {
      // Route to another link if screen size is greater than mobile
      router.push('/mycv'); 
    } else {
      // Trigger the download handler if screen size is mobile
      cvDownloadHandler();
    }
  }

  return (
    <button 
      onClick={handleButtonClick}
      className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white px-4 py-2 rounded-md">
      Resume
    </button>
  )
}