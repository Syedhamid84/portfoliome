"use client";
import { FileDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const FormDetail = () => {
    const pdfRef = useRef<HTMLDivElement | null>(null);



    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        useremail: "",
        usernumber: "",
        userskills: "",
        usercity: "",
        usermessage: "",
    })


    useEffect(() => {
        // const values = localStorage.getItem("forms_values");
        // console.log("vlaues", values);

        // setFormValues(JSON.parse(values))
        // console.log("state values", formValues);
        const valuesLocalStorage = JSON.parse(localStorage.getItem("forms_values") || "[]")  // The || operator acts as a fallback mechanism. If the getItem("forms_values") returns null (i.e., the key doesn't exist), this part ensures that an empty array string ("[]") is used instead
        setFormValues(valuesLocalStorage);
    }, [])

    // useEffect(() => {
    //     console.log("Updated form values:", formValues);
    // }, [formValues]);
    // const { name, lastname, email, phoneNumber, skills, city, message } = router.query;

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
        <div ref={pdfRef} className='flex flex-col justify-center items-center gap-6 border-2 h-screen'>
            <div className='flex justify-center items-center gap-6 border-2 rounded-md '>


                <div className='flex flex-col gap-4 border2 p-5'>
                    <div>Name:</div>
                    <div>LastName:</div>
                    <div>Email:</div>
                    <div>Phone No:</div>
                    <div>Skills:</div>
                    <div>City:</div>
                    <div>Message:</div>
                </div>
                <div className='flex flex-col gap-4 border2 p-5'>
                    <div>{formValues.firstname}</div>
                    <div>{formValues.lastname}</div>
                    <div>{formValues.useremail}</div>
                    <div>{formValues.usernumber}</div>
                    <div>{formValues.userskills}</div>
                    <div>{formValues.usercity}</div>
                    <div>{formValues.usermessage}</div>
                </div>

            </div>
            <div className='  '>

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
export default FormDetail;
