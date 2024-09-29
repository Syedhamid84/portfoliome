import React from 'react'
import arhamImage from "@/public/assets/headerImages/Ellipse 2.png";
import phoneImage from "@/public/assets/headerImages/phone.png";
import messageImage from "@/public/assets/headerImages/message.png";
import linkedinImage from "@/public/assets/headerImages/linkedin.png";

import Image from 'next/image';

export const Header = () => {
    return (
        <div className='flex justify-between p-10'>
            <div className='flex gap-5 items-center'>
                <div className='h-[210px] w-[210px] rounded-full bg-[#FFBA52]'>
                    <Image className='w-full' src={arhamImage} alt="arham_image" />
                </div>
                <div className='flex flex-col gap-2'>

                    <h1 className='font-sans font-bold text-4xl'>ARHAM SARWAR</h1>
                    <p className='font-normal text-xl'>Full Stack (Flutter, Firebase, Backend, DevOps)</p>
                </div>


            </div>

            <div className='flex flex-col gap-3'>
                {contactdetails.map((Item, index) => {
                    return (
                        <div key={index} className='flex gap-4 items-center'>
                            <Image src={Item.contactIcon} alt='iconImage' className='w-[42px] h-[42px] ' />

                            <span>{Item.contactVale} </span>


                        </div>
                    )
                })}


            </div>

        </div>
    )
};
export default Header;

export const contactdetails = [
    {
        contactIcon: phoneImage,
        contactVale: "+92 308 4695012",
    },

    {
        contactIcon: messageImage,
        contactVale: "arhamsarwar786@gmail.com",
    },

    {
        contactIcon: linkedinImage,
        contactVale: "Linkedin/arham-sarwar-a1b56b176 🔗",
    },


]


