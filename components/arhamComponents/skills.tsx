import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col gap-5 max-w-[536px] mt-10'>
            <h1 className='font-bold text-4xl'>Skills</h1>

            <div className='flex flex-col gap-5 max-w-[491px]'>
                {skilsData.map((Item, index) => {
                    return (
                        <div key={index} className='flex gap-6 '>
                            <div className='h-2 w-2 mt-4 rounded-full bg-black'>
                            </div>
                            <div className=' font-bold text-2xl bg-ed-400 max-w-[459px]'>{Item.name}

                                <span className='font-normal text-2xl'>{Item.description}</span>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    )
}
export default Skills;

export const skilsData = [
    {
        name: "Mobile App",
        description: " - Flutter | CICD (Flutter)"
    },

    {
        name: "Back-End",
        description: " - Firebase | Nest Js | Node Js | Docker | RabbitMQ | Sockets"
    },

    {
        name: "Programming Language",
        description: " - Dart | C++ | Javascript | Python"
    },

    {
        name: "CMS",
        description: " - WordPress | Flutter Flow | Adalo | Bubble | Glide"
    },

    {
        name: "Database",
        description: " - Firestore | Mongo | MySQL | SupaBase | Postgresql"
    },

    {
        name: "Deployment",
        description: " - CICD | AppStore | Playstore | Firebase Hosting | CPanel | AWS | EC2 | ECS | GCP | VM"
    },
]
