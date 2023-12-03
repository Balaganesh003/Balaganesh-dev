import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { useState, useEffect } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import ResumeDownload from '@/components/ResumeDownload';

const Resume = () => {
  const [scale, setScale] = useState(1);

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
    <div className="flex flex-col justify-center items-center bg-primary overflow-x-hidden gap-6 pt-8">
      <h1 className="text-xl md:text-4xl uppercase text-center text-white">
        Resume
      </h1>
      <Document
        file={'./Balaganesh-resume.pdf'}
        className={'overflow-y-hidden overflow-x-hidden'}>
        <Page
          pageNumber={1}
          renderMode="canvas"
          scale={scale} // Dynamic scale
        />
      </Document>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 shadow-lg z-[10]">
        <ResumeDownload />
      </div>
    </div>
  );
};

export default Resume;
