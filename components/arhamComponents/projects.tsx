import React from 'react'

const Projects = () => {
    return (
        <div className='flex flex-col gap-3 mt-10'>
            <h1 className='font-bold text-4xl'>Projects</h1>
            <h2 className='font-bold text-2xl text-[#FFBA52]'>Mobile Applications</h2>

            <div className='flex flex-col gap-3 w-[615px]'>
                {ProjectData.map((Item, index) => {
                    return (
                        <div key={index} className='flex'>

                            <div className='flex gap-5 bg-reen-500'>

                                <div className='h-2 w-2 mt-4 rounded-full bg-black'>
                                </div>
                                <div className='flex flex-col'>

                                    <span className='flex'>
                                        <h1 className='font-bold text-2xl'>{Item.projectname} </h1>

                                    </span>
                                    <span className='font-normal text-sm'>{Item.projectheading}</span>

                                    <span className='font-normal text-xl mt-3'>
                                        {Item.projectdescription}
                                    </span>
                                </div>
                            </div>

                        </div>

                    );
                })}
            </div>
        </div>
    )
};

export default Projects;

export const ProjectData = [
    {
        projectname: "BargainEx",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Bargain Exchange is your ultimate platform for buying and selling, offering a diverse range of categories from electronics to fashion and collectibles."
    },

    {
        projectname: "Salamy",
        projectheading: "Specific Sections",
        androidLink: "",
        iosLink: "",
        projectdescription: "Discover the ultimate Islamic app for Quran reading, Islamic quotes, and social networking."
    },

    {
        projectname: "ohReady",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "With Oh Ready you can order food from your mobile phone in your town. Oh Ready will delivery your food at your door step"
    },

    {
        projectname: "InstaCalm Anxiety",
        projectheading: "Flow Setup + Payments",
        androidLink: "",
        iosLink: "",
        projectdescription: "InstaCalm Anxiety Treatment app, developed by a top U.S. anxiety therapist, employs 30+ Cognitive Behavioural Hypnotherapy Sessions for instant anxiety relief."
    },
    {
        projectname: "Funky",
        projectheading: "Full Stack (Frontend+Backend)",
        androidLink: "",
        iosLink: "",
        projectdescription: "Funky is a multifaceted social media application offering modes for creators, kids, and advertisers to engage and earn"
    },
    {
        projectname: "Roshi Career",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Roshi is a specialized career app akin to LinkedIn, tailored for recruiters and job seekers, featuring a built-in CV generator for streamlined professional profile creation."
    },
    {
        projectname: "ohReady Admin",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "With Oh Ready you can order food from your mobile phone in your town. Oh Ready will delivery your food at your door step"
    },
    {
        projectname: "Fittech",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Fittech App, designed for gyms and Spanish speakers, is a fitness-oriented application facilitating daily fitness tracking. Tailored to enhance the workout experience, it integrates seamlessly with a focus on Spanish-language users."
    },
    {
        projectname: "Ping",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Ping, a dynamic social media app, facilitates local connections with features like nearby contacts, friend connections, news feeds, and posts."
    },
    {
        projectname: "AirHomeRestaurant",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "AirHomeRestaurant is a specialized application catering to a specific restaurant, featuring a dual interface for sellers and buyers, akin to platforms like FoodPanda. It streamlines the process, showcasing a comprehensive list of food items for a seamless dining experience."
    },
    {
        projectname: "",
        projectheading: "",
        androidLink: "",
        iosLink: "",
        projectdescription: ""
    },
    {
        projectname: "",
        projectheading: "",
        androidLink: "",
        iosLink: "",
        projectdescription: ""
    },
    {
        projectname: "",
        projectheading: "",
        androidLink: "",
        iosLink: "",
        projectdescription: ""
    },
]


