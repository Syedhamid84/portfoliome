import React from 'react'
import Image from 'next/image';
import Globe from "@/public/assets/ProjectButton/BgGlobe.png"

const WebProjects = () => {
    return (
        <div className='flex flex-col gap-3 mt-10'>
            <h1 className='font-bold text-4xl'>Projects</h1>
            <h2 className='font-bold text-2xl text-[#FFBA52]'>Website + Backend</h2>

            <div className='flex gap-8'>


                <div className='flex flex-col gap-5 w-[565px]'>
                    {ProjectData.map((Item, index) => {
                        return (
                            <div key={index} className='flex'>

                                <div className='flex flex-col gap-5 bg-reen-500'>
                                    <div className='flex gap-4 '>

                                        <div className='h-2 w-2 mt-4 rounded-full bg-black'>
                                        </div>
                                        <div className='flex justify-between w-full'>
                                            <div className='flex flex-col bgred-400 w-[460px]'>
                                                <div className='flex gap-3'>
                                                    <h1 className='font-bold text-2xl'>{Item.projectname} </h1>
                                                    {Item.WebLink && (
                                                        <div className='flex justify-center items-center w-8 h-8 rounded-full'>

                                                            <a href={Item.WebLink} target='_blank' className='flex justify-center items-center w-8 h-8 rounded-full bg-[#E7E7E7]'>
                                                                <Image src={Globe} alt='' className='h-4 w-4' />
                                                            </a>
                                                        </div>
                                                    )}

                                                </div>
                                                <span className='font-normal text-sm'>{Item.projectheading}</span>

                                                { }
                                            </div>
                                            <div className='flex gap-2 flex-wrap  max-w-[250px]'>
                                                {Item.skills && Item.skills.map((skill, i) => (
                                                    <button key={i} className='px-4 py-0.5 bg-[#E7E7E7] text-black rounded-3xl font-normal text-xs'>
                                                        {skill}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>

                                        <span className='font-normal text-xl '>
                                            {Item.projectdescription}
                                        </span>
                                    </div>
                                </div>

                            </div>

                        );
                    })}
                </div>


                {/* second row */}
                <div className='w-2 rounded-t-full rounded-b-full bg-[#FFBA52] h-[778px] mb-5'>
                </div>

                <div className='flex flex-col gap-5 w-[565px]'>
                    {ProjectDataSecond.map((Item, index) => {
                        return (
                            <div key={index} className='flex'>
                                <div className='flex flex-col gap-5 bg-reen-500'>
                                    <div className='flex gap-4 '>
                                        <div className='h-2 w-2 mt-4 rounded-full bg-black'>
                                        </div>
                                        <div className='flex justify-between w-full'>
                                            <div className='flex flex-col bgred-400 w-[460px]'>
                                                <div className='flex gap-3'>
                                                    <h1 className='font-bold text-2xl'>{Item.projectname} </h1>
                                                    {Item.WebLink && (
                                                        <div className='flex justify-center items-center w-8 h-8 rounded-full'>
                                                            <a href={Item.WebLink} target='_blank' className='flex justify-center items-center w-8 h-8 rounded-full bg-[#E7E7E7]'>
                                                                <Image src={Globe} alt='' className='h-4 w-4' />
                                                            </a>
                                                        </div>
                                                    )}

                                                </div>
                                                <span className='font-normal text-sm'>{Item.projectheading}</span>

                                                { }
                                            </div>
                                            <div className='flex gap-2 flex-wrap  max-w-[250px]'>
                                                {Item.skills && Item.skills.map((skill, i) => (
                                                    <button key={i} className='px-4 py-0.5 bg-[#E7E7E7] text-black rounded-3xl font-normal text-xs'>
                                                        {skill}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>

                                        <span className='font-normal text-xl '>
                                            {Item.projectdescription}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default WebProjects

export const ProjectData = [
    {
        projectname: "Certainli.se",
        projectheading: "Deployment",
        WebLink: "https://certainli.se/",
        projectdescription: "Certainli, born from a deep comprehension of modern challenges in product compliance, is driven by a team with extensive expertise in product development, electronics design, B2B software, and compliance. Co-founded by Hidden Dreams, a Swedish venture builder renowned for innovative software solutions, Certainli is dedicated to simplifying electronic product compliance, with a specific emphasis on supplier documentation. The certain.se portfolio website provides a glimpse into Certainli's commitment to addressing these industry challenges.",
        skills: ["WordPress", "Digital Ocean", "VPC Deployment with MYSQL"]
    },

    {
        projectname: "Certainli",
        projectheading: "Full Stack (Frontend+Backend)",
        WebLink: "https://app.certain.li/",
        projectdescription: "Revolutionizing women's health with HarmonyHealth, a modern E-doctor platform seamlessly integrating conventional medicine and alternative healthcare for holistic well-being and hormonal health understanding.",
        skills: ["React JS", "Nest JS", "Docker", "Scraping", "CI/CD"]

    },

    {
        projectname: "FemClinic",
        projectheading: "Deployment + Web Security",
        WebLink: "https://www.fem-clinic.com/",
        projectdescription: "With Oh Ready you can order food from your mobile phone in your town. Oh Ready will delivery your food at your door step",
        skills: ["AWS", "ECS", "RDS", "CI/CD", "Docker", "Chime"]

    },



]


export const ProjectDataSecond = [
    {
        projectname: "Globe",
        projectheading: "Three JS Implementation",
        WebLink: "http://34.29.235.205/",
        projectdescription: "A Globe is a unique website where each user interaction results in a dot on a Three.js globe, creating a visual representation. As 1 million unique IP users engage, the globe illuminates, symbolizing the collective impact of global interaction.",
        skills: ["HTML", "THREE JS", "GCP VM",]

    },

    {
        projectname: "Globe Deployment",
        projectheading: "Frontend",
        WebLink: "",
        projectdescription: "Hpappen, a Swedish-based MCQ website, is your go-to platform for efficient slaybus preparation, offering a streamlined and comprehensive approach to mastering multiple-choice questions.",
        skills: ["HTML", "THREE JS", "GCP VM",]

    },

    {
        projectname: "Hp Appen",
        projectheading: "Backend",
        WebLink: "https://www.hpappen.se/",
        projectdescription: "Amici App is designed to streamline the process of booking a chef for entire days to cater to your culinary needs at home.",
        skills: ["Node JS", "Docker", "CI/CD", "GitHub Actions", "MongoDB"]

    },

    {
        projectname: "Hp Appen Production",
        projectheading: "Deployement",
        WebLink: "https://app.hpappen.se/",
        projectdescription: "Hpappen, a Swedish-based MCQ website, is your go-to platform for efficient slaybus preparation, offering a streamlined and comprehensive approach to mastering multiple-choice questions.",
        skills: ["Node JS", "Docker", "CI/CD", "GitHub Actions"]

    },

]
