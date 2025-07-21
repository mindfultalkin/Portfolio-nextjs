import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Point the workerSrc to the public folder
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export function BusinessRequirementPDF() {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c] px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        Business Requirement Document
      </h1>
      <p className="text-sm text-[#666666] mb-4">
        Path: <code>software-development-life-cycle/business-requirement.pdf</code>
      </p>

      <div className="overflow-auto">
        <Document
          file="/software-development-life-cycle/business-requirement.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div key={`page_${index + 1}`} className="mb-8">
              <Page pageNumber={index + 1} width={800} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}
