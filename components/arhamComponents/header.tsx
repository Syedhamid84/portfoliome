import React from 'react'

export const header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
                <div className='h-[210px] w-[210px] rounded-full bg-[#FFBA52]'>
                    <img className='w-full' src=" " alt="arham_image" />
                </div>
                <div className='flex flex-col gap-2'>

                    <h1>ARHAM SARWAR</h1>
                    <p>Full Stack (flutter, firebase, Backend, DevOps)</p>
                </div>


            </div>

            <div>


            </div>

        </div>
    )
};
export default header;

export const contactdetails = [
    {
        contactIcon: "",
        contactVale: "+92 308 4695012",
    },

    {
        contactIcon: "",
        contactVale: "arhamsarwar786@gmail.com",
    },

    {
        contactIcon: "",
        contactVale: "Linkedin/arham-sarwar-a1b56b176 🔗",
    },


]


