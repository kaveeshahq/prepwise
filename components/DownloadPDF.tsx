import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface DownloadPDFProps {
  feedback: any;
  interview: any;
}

const DownloadPDF: React.FC<DownloadPDFProps> = ({ feedback, interview }) => {
  const handleDownload = async () => {
    const element = document.getElementById("feedback-pdf");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
    pdf.save(`${interview.role}-interview-feedback.pdf`);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 btn-primary rounded-xl shadow transition"
    >
      Download PDF
    </button>
  );
};

export default DownloadPDF;
