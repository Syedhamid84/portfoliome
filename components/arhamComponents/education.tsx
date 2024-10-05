import React from 'react'

const Education = () => {
    return (
        <div className='flex flex-col  mt-10 gap-5'>
            <h1 className='font-bold text-4xl text-[#000000]'>Education</h1>
            <div className='flex flex-col gap-5'>
                {educationDetails.map((Item, index) => {
                    return (
                        <div key={index} className='flex '>

                            <div className='flex gap-5 bgred-500'>
                                <div className='h-2 w-2 mt-4 rounded-full bg-black'>
                                </div>

                                <div className='flex flex-col bg-ellow-300'>
                                    <span className='font-bold text-2xl'>{Item.degreeName} </span>
                                    <span className='font-normal text-2xl'>{Item.intitutionName} </span>
                                    <span className='font-normal text-2xl'>{Item.degreeDuration} </span>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Education;

export const educationDetails = [
    {
        degreeName: "Bachelors in Information Technology",
        intitutionName: "University of Punjab Lahore",
        degreeDuration: "2019 - 2023",
    },

    {
        degreeName: "Fs.c Pre-Engineering",
        intitutionName: "Islamia College, Lahore",
        degreeDuration: "2016 - 2019",
    },

    {
        degreeName: "Matric",
        intitutionName: "Islamia High School, Lahore",
        degreeDuration: "2014 - 2016",
    },
]
