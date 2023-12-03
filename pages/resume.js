import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { useState, useEffect } from 'react';
import DownloadPdfButton from '@/components/DownloadButton';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-primary overflow-x-hidden gap-8 py-8">
      <Document
        file={'./Balaganesh-resume.pdf'}
        className={'overflow-y-hidden'}>
        <Page
          pageNumber={1}
          renderMode="canvas"
          scale={width > 786 ? 1.5 : 0.6}
        />
      </Document>
    </div>
  );
};

export default Resume;
