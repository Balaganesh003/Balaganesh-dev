import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useState, useEffect } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import ResumeDownload from '@/components/ResumeDownload';

const Resume = () => {
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState(786);
  const [isScrolledFull, setIsScrolledFull] = useState(false);
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromBottom =
        Math.ceil(window.innerHeight + window.scrollY) -
        document.documentElement.scrollHeight;
      const isNearBottom =
        width >= 786 ? distanceFromBottom >= -64 : distanceFromBottom >= -193;
      setIsScrolledFull(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 786;
      setWidth(screenWidth);
      const scaleFactor = screenWidth / baseWidth;
      setScale(Math.min(Math.max(scaleFactor, 0.5), 1.5));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyNav(window.scrollY > 96);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      className={`flex flex-col text-white md:min-h-screen items-center justify-start bg-primary overflow-x-hidden overflow-y-hidden pb-10 gap-6 pt-8 relative ${
        isStickyNav && 'mt-[5rem]'
      }`}>
      <h1 className="text-xl md:text-4xl uppercase text-center text-white">
        Resume
      </h1>
      <Document
        file={'./Balaganesh-resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
        className={'overflow-x-hidden overflow-y-hidden relative'}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderMode="canvas"
            scale={scale}
          />
        ))}
      </Document>
      <div
        className={`${
          isScrolledFull
            ? 'absolute md:bottom-5 bottom-[1rem]'
            : 'fixed bottom-10'
        } left-1/2 -translate-x-1/2 shadow-lg z-[10]`}>
        <ResumeDownload />
      </div>
    </div>
  );
};

export default Resume;
