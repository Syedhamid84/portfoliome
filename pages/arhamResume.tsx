import React from 'react'
import Header from '@/components/arhamComponents/header';
import About from '@/components/arhamComponents/about';
import Education from '@/components/arhamComponents/education';
import Hobicourse from '@/components/arhamComponents/hobicourse';
import Experience from '@/components/arhamComponents/experience';
import Skills from '@/components/arhamComponents/skills';

export const ArhamResume = () => {
    return (
        <>

            <Header />
            <div className='flex gap-5 mx-10 '>
                <div className='flex-col'>
                    <About />

                    <Education />
                    <Hobicourse />

                </div>

                {/* <div className='border-4 rounded-t-full rounded-b-full border-[#FFBA52]'>

                </div> */}
                <div className='w-2 rounded-t-full rounded-b-full bg-[#FFBA52] h-[1568px] mb-5'>

                </div>
                <div className='flex-col '>
                    <Experience />
                    <Skills />

                </div>
            </div>
        </>
    )
};
export default ArhamResume;
