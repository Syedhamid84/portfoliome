import React, { useRef } from 'react'
import Header from '@/components/arhamComponents/header';
import About from '@/components/arhamComponents/about';
import Education from '@/components/arhamComponents/education';
import Hobicourse from '@/components/arhamComponents/hobicourse';
import Experience from '@/components/arhamComponents/experience';
import Skills from '@/components/arhamComponents/skills';
import Projects from '@/components/arhamComponents/projects';
import WebProjects from '@/components/arhamComponents/webprojects';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FileDown } from 'lucide-react';



const ArhamResume = () => {

    const pdfRef = useRef<HTMLDivElement | null>(null);


    const downloadPDF = () => {
        const input = pdfRef.current;
        // Check if the ref is null before proceeding
        if (!input) {
            console.error("pdfRef is not attached to a valid DOM element.");
            return;
        }
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("");
            const pdf = new jsPDF("p", "mm", "a4", true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 20;
            pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save("PrtfolioMe.pdf");
        })
            .catch((err) => console.error("Error generating PDF:", err));

    };
    return (
        <div ref={pdfRef}>

            <Header />
            <div className='flex gap-5 mx-10 pb-10'>
                <div className='flex-col'>
                    <About />
                    <Education />
                    <Hobicourse />
                </div>

                <div className='w-2 rounded-t-full rounded-b-full bg-[#FFBA52] h-[1568px] mb-5'>
                </div>
                <div className='flex-col '>
                    <Experience />
                    <Skills />
                </div>
            </div>

            <div className='flex gap-5 mx-10'>
                <Projects />
            </div>

            <div className='flex gap-5 mx-10'>
                <WebProjects />
            </div>

            <div className='flex gap-5 mx-10 mb-5'>
                <button
                    onClick={downloadPDF}
                    className='flex gap-2 border rounded-md bg-green-400 w-40 p-3 text-white'>Download PDF
                    <span>
                        <FileDown className='h-5 w-5' />

                    </span>
                </button>
            </div>

        </div>
    )
};
export default ArhamResume;
