import index from '@/pages';
import React from 'react'

const Hobicourse = () => {
    return (
        <>

            <div className='ml-10 mt-10 flex flex-col gap-5 '>
                <h1 className='font-bold text-4xl'>Hobbies</h1>
                <div className='flex flex-col gap-3 bg-ed-400'>
                    {hobbyname.map((Item, index) => {
                        return (
                            <div key={index} className='flex gap-3 items-center'>
                                <div className='h-2 w-2 rounded-full bg-black'>
                                </div>
                                <div className='font-normal text-2xl'>
                                    {Item.name}
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>

            <div className='ml-10 mt-10 flex flex-col gap-5 '>
                <h1 className='font-bold text-4xl'>Course</h1>
                <div className='flex flex-col gap-3 bg-ed-400'>
                    {courselist.map((Item, index) => {
                        return (
                            <div key={index} className='flex gap-3 items-center'>
                                <div className='h-2 w-2 rounded-full bg-black'>
                                </div>
                                <div className='font-normal text-2xl'>
                                    {Item.name}
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )
};
export default Hobicourse;

export const hobbyname = [
    {
        name: "Book Reading",
    },
    {
        name: "Video Games",
    },
    {
        name: "Learning New Tech",
    }

];
export const courselist = [
    {
        name: "Vvork Web Frontend"
    },
    {
        name: "Vvork Web Backend"
    },
    {
        name: "Vvork MERN Stack"
    },
    {
        name: "Pitac Cloud Computing"
    },
    {
        name: "EwigLife Flutter"
    },
    {
        name: "Angela Yu Flutter"
    },
];


