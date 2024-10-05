import React from 'react'

const Experience = () => {
    return (
        <div className='flex flex-col gap-5 max-w-[536px]'>
            <h1 className='font-bold text-4xl'>Experience</h1>

            <div className='flex flex-col gap-5'>
                {experienceData.map((Item, index) => {
                    return (
                        <div key={index} className='flex gap-6 bg-geen-500'>
                            <div className='h-2 w-2 mt-4 rounded-full bg-black'>
                            </div>
                            <div className='bg-ed-400 w-[496px]'>

                                <h1 className='font-bold text-2xl'>{Item.heading}</h1>
                                <div className='flex  w-full '>
                                    <span className='font-normal text-2xl' >{Item.companyname}</span>



                                </div>
                                <span className='font-normal text-2xl'>{Item.duration} </span>

                            </div>
                        </div>

                    );
                })}

            </div>

        </div>
    )
};
export default Experience;

export const experienceData = [
    {
        heading: "Full Stack Developer (Flutter + Backend + Deployments) [Promoted]",
        companyname: "SecureHops | www.securehops.com",
        duration: "Sept 2023 - Current"
    },

    {
        heading: "Team Lead (Flutter + Backend) [Promoted]",
        companyname: "SecureHops | www.securehops.com",
        duration: "Jan 2023 - Current"
    },

    {
        heading: "Flutter Developer",
        companyname: "SecureHops | www.securehops.com",
        duration: "July 2022 - Current"
    },

    {
        heading: "Flutter Developer",
        companyname: "Salamgram.inc | www.salamgram.com",
        duration: "March 2022 - Sept 2022"
    },

    {
        heading: "Flutter Developer",
        companyname: "StepInSolutions | www.stepin-solutions.com",
        duration: "Oct 2021 - Nov 2021"
    },

    {
        heading: "Flutter Developer",
        companyname: "devsinntechnologies | devsinntechnologies.com",
        duration: "Oct 2021 - Current"
    },

    {
        heading: "MERN Stack and Flutter Freelancing",
        companyname: "Upwork | Fiverr",
        duration: "March 2019 - Feb 2021"
    }
]
