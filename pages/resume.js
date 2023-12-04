import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { useState, useEffect } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import ResumeDownload from '@/components/ResumeDownload';

const Resume = () => {
  const [scale, setScale] = useState(1);
  const [isScrolledFull, setIsScrolledFull] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance from the bottom of the document
      const distanceFromBottom =
        Math.ceil(window.innerHeight + window.scrollY) -
        document.documentElement.scrollHeight;

      // Check if the user is within 40px of the bottom
      const isNearBottom = distanceFromBottom >= -72;
      setIsScrolledFull(isNearBottom);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 786; // Base width for scale 1
      const scaleFactor = screenWidth / baseWidth;

      // Set the scale, limiting to a maximum of 1.5 and a minimum of 0.5
      setScale(Math.min(Math.max(scaleFactor, 0.5), 1.5));
    };

    // Set the initial scale
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col text-white md:min-h-screen items-center justify-start bg-primary overflow-x-hidden overflow-y-hidden pb-10 gap-6 pt-8 relative">
      <h1 className="text-xl md:text-4xl uppercase text-center text-white">
        Resume
      </h1>
      <Document
        file={'./Balaganesh-resume.pdf'}
        className={'overflow-x-hidden overflow-y-hidden relative'}>
        <Page
          pageNumber={1}
          renderMode="canvas"
          scale={scale} // Dynamic scale
        />
      </Document>
      <div
        className={`${
          isScrolledFull
            ? 'md:absolute md:bottom-5 fixed bottom-[10rem]'
            : 'fixed bottom-10'
        }  left-1/2 -translate-x-1/2 shadow-lg z-[10]`}>
        <ResumeDownload />
      </div>
    </div>
  );
};

export default Resume;
