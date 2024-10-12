import React from 'react'
import Image from 'next/image';
import Appstore from "@/public/assets/ProjectButton/Appstore.png";
import Playstore from "@/public/assets/ProjectButton/playstore.png";


const Projects = () => {
    return (
        <div className='flex flex-col gap-3 mt-10'>
            <h1 className='font-bold text-4xl'>Projects</h1>
            <h2 className='font-bold text-2xl text-[#FFBA52]'>Mobile Applications</h2>

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
                                            <div className='flex flex-col bgred-400'>
                                                <div className='flex gap-3'>
                                                    <h1 className='font-bold text-2xl'>{Item.projectname} </h1>
                                                    <a href={Item.iosLink} className='flex justify-center items-center w-8 h-8 rounded-full bg-[#E7E7E7]'>

                                                        <Image src={Appstore} alt='' className='h-4 w-4' />

                                                    </a>
                                                    <a href={Item.androidLink} className='flex justify-center items-center w-8 h-8 rounded-full bg-[#E7E7E7]'>
                                                        <Image src={Playstore} alt='' className='' />


                                                    </a>
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
                <div className='w-2 rounded-t-full rounded-b-full bg-[#FFBA52] h-[1978px] mb-5'>
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
                                            <div className='flex flex-col bgred-400'>
                                                <div className='flex gap-3'>
                                                    <h1 className='font-bold text-2xl'>{Item.projectname} </h1>
                                                    {Item.iosLink && (

                                                        <a href={Item.iosLink} className='flex justify-center items-center w-8 h-8 rounded-full bg-[#E7E7E7]'>
                                                            <Image src={Appstore} alt='' className='h-4 w-4' />
                                                        </a>
                                                    )}
                                                    {Item.androidLink && (

                                                        <a href={Item.androidLink} className='flex justify-center items-center w-8 h-8 rounded-full bg-[#E7E7E7]'>
                                                            <Image src={Playstore} alt='' className='' />
                                                        </a>
                                                    )}
                                                </div>
                                                <span className='font-normal text-sm'>{Item.projectheading}</span>

                                                { }
                                            </div>
                                            <div className='flex gap-2 flex-wrap  w-[250px]'>
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

export default Projects;

export const ProjectData = [
    {
        projectname: "BargainEx",
        projectheading: "Complete Functional App",
        androidLink: "https://play.google.com/store/apps/details?id=com.pauspan.bargainex",
        iosLink: "https://apps.apple.com/pk/app/bargain-exchange/id6468424905",
        projectdescription: "Bargain Exchange is your ultimate platform for buying and selling, offering a diverse range of categories from electronics to fashion and collectibles.",
        skills: ["Flutter", "Firebase", "RestAPIs", "GetX", "Map", "App Update"]
    },

    {
        projectname: "Salamy",
        projectheading: "Specific Sections",
        androidLink: "https://play.google.com/store/apps/details?id=com.salamgram.salamgram",
        iosLink: "https://apps.apple.com/pk/app/salamly-muslim-daily-app/id1612064624",
        projectdescription: "Discover the ultimate Islamic app for Quran reading, Islamic quotes, and social networking.",
        skills: ["Flutter", "Firebase", "Provider", "In App Review", "In App Purchase"]

    },

    {
        projectname: "ohReady",
        projectheading: "Complete Functional App",
        androidLink: "https://play.google.com/store/apps/details?id=com.digicare.ohready",
        iosLink: "https://apps.apple.com/pk/app/oh-ready/id1616311272",
        projectdescription: "With Oh Ready you can order food from your mobile phone in your town. Oh Ready will delivery your food at your door step",
        skills: ["Flutter", "Firebase", "RestAPIs", "Provider", "Google Map"]

    },

    {
        projectname: "InstaCalm Anxiety",
        projectheading: "Flow Setup + Payments",
        androidLink: "https://play.google.com/store/apps/details?id=com.instacalm.instacalm_anxiety_treatment1",
        iosLink: "https://apps.apple.com/pk/app/instacalm-anxiety-treatment/id1566417763",
        projectdescription: "InstaCalm Anxiety Treatment app, developed by a top U.S. anxiety therapist, employs 30+ Cognitive Behavioural Hypnotherapy Sessions for instant anxiety relief.",
        skills: ["Flutter", "Firebase", "PDFs", "In App Purchase", "Music Player"]

    },
    {
        projectname: "Funky",
        projectheading: "Full Stack (Frontend+Backend)",
        androidLink: "",
        iosLink: "",
        projectdescription: "Funky is a multifaceted social media application offering modes for creators, kids, and advertisers to engage and earn",
        skills: ["Flutter", "Firebase", "RestAPIs", "GetX", "Video Players", "Stripe"]

    },
    {
        projectname: "Roshi Career",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Roshi is a specialized career app akin to LinkedIn, tailored for recruiters and job seekers, featuring a built-in CV generator for streamlined professional profile creation.",
        skills: ["Flutter", "Firebase", "Provider", "RestAPIs", "Social Auth",]

    },
    {
        projectname: "ohReady Admin",
        projectheading: "Complete Functional App",
        androidLink: "https://play.google.com/store/apps/details?id=com.digicare.ohreadyrestadmincenter",
        iosLink: "",
        projectdescription: "With Oh Ready you can order food from your mobile phone in your town. Oh Ready will delivery your food at your door step",
        skills: ["Flutter", "Firebase", "RestAPIs", "Provider", "Google Map"]

    },
    {
        projectname: "Fittech",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Fittech App, designed for gyms and Spanish speakers, is a fitness-oriented application facilitating daily fitness tracking. Tailored to enhance the workout experience, it integrates seamlessly with a focus on Spanish-language users.",
        skills: ["Flutter", "Firebase", "RestAPIs", "Provider", "MVVM"]

    },
    {
        projectname: "Ping",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Ping, a dynamic social media app, facilitates local connections with features like nearby contacts, friend connections, news feeds, and posts.",
        skills: ["Flutter", "Firebase", "MVC", "Provider", "Lamda", "NearBy"]

    },
    {
        projectname: "AirHomeRestaurant",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "AirHomeRestaurant is a specialized application catering to a specific restaurant, featuring a dual interface for sellers and buyers, akin to platforms like FoodPanda. It streamlines the process, showcasing a comprehensive list of food items for a seamless dining experience.",
        skills: ["Flutter", "Firebase", "Provider", "Stripe", "RestAPIs", "MAP"]

    },
]


export const ProjectDataSecond = [
    {
        projectname: "IQRA Quran App",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "IQRA is a Quran app offering features like Quranic content, prayer times, tasbeeh, and information on names of Allah and Prophet Muhammad. Designed for offline use, it provides a comprehensive resource for users seeking Quranic guidance and Islamic practices.",
        skills: ["Local JSON", "Preferences", "Flutter", "Provider"]
    },

    {
        projectname: "Reverse Disease",
        projectheading: "Full Stack (Frontend+Backend)",
        androidLink: "",
        iosLink: "",
        projectdescription: "Reverse Disease is a health tracking app that monitors fasting, steps, weight, and more, providing a comprehensive tool for users aiming to improve their overall well-being.",
        skills: ["Flutter", "Firebase", "GetX",]

    },

    {
        projectname: "Amici",
        projectheading: "Specific Sections",
        androidLink: "",
        iosLink: "",
        projectdescription: "Amici App is designed to streamline the process of booking a chef for entire days to cater to your culinary needs at home.",
        skills: ["Flutter", "Firebase", "GetX", "Firebase Functions"]

    },

    {
        projectname: "United Proposal",
        projectheading: "Full Stack (Frontend+Backend)",
        androidLink: "",
        iosLink: "",
        projectdescription: "United Proposal is an online matchmaking platform facilitating the search for ideal life partners while also offering features like discovering wedding venues and related services. The comprehensive app includes an admin panel developed in Flutter web for efficient management and control.",
        skills: ["Flutter", "Firebase", "Provider", "Flutter Web"]

    },
    {
        projectname: "PricePro",
        projectheading: "Specific Sections",
        androidLink: "https://play.google.com/store/apps/details?id=com.mycompany.price",
        iosLink: "",
        projectdescription: "Application to manage menus of different branches of restaurant. Copy/Move items across branches and set different rates.",
        skills: ["Custom Widgets", "FlutterFlow", "Firebase"]

    },
    {
        projectname: "MyCash",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "MyCash is a no-interest loan application designed to provide easy and compassionate financial assistance to users in need, offering a user-friendly",
        skills: ["Flutter", "Firebase", "GetX", "RestAPIs"]

    },
    {
        projectname: "Flavourz Restaurant",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Flavourz is a dedicated food application tailored for a specific restaurant, offering a seamless and specialized platform for customers to explore.",
        skills: ["Flutter", "Firebase", "RestAPIs", "Firebase OTP"]

    },
    {
        projectname: "Tritt",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Tritt is a FlutterFlow app resembling TrueCaller, with features such as SMS fetching and storage to Firestore, as well as Agora chat and call functionalities",
        skills: ["FlutterFlow", "Agora Video and Audio", "Firebase Chat", "Mobile SMS"]

    },
    {
        projectname: "LockSmith Guru",
        projectheading: "Complete Functional App",
        androidLink: "",
        iosLink: "",
        projectdescription: "Locksmith Guru is a specialized app designed for resolving various types of locks in Dubai, including those on cars, doors, and more",
        skills: ["Flutter", "RestAPIs", "Provider"]

    },
    {
        projectname: "EkCabFare",
        projectheading: "Full Stack (Frontend+Backend)",
        androidLink: "",
        iosLink: "",
        projectdescription: "This app displays and compares fares between Uber, Careem, and Ola cabs, utilizing scraping techniques to showcase real-time pricing information. Built on Flutter, it provides users with a convenient way to make informed choices for their rides based on fare comparisons.",
        skills: ["Scrape Uber", "Scrape careem", "Flutter", "Scrape OLA"]
    },

]

