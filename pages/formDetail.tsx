import { useRouter } from 'next/router';
import React from 'react'

const login = () => {

    const router = useRouter();
    const { query } = router;
    const name = query.firstname;
    const lastname = query.lastname;
    const email = query.useremail;
    const phoneNumber = query.usernumber;
    const skills = query.userskills;
    const city = query.usercity;
    const message = query.usermessage;

    // const { name, lastname, email, phoneNumber, skills, city, message } = router.query;



    return (
        <div className='flex justify-center items-center gap-6 border-2 p-20 '>

            <div className='flex flex-col gap-4 border2 p-5'>
                <div>Name:</div>
                <div>LastName:</div>
                <div>Email:</div>
                <div>Phone No:</div>
                <div>Skills:</div>
                <div>City:</div>
                <div>Message:</div>
            </div>
            <div className='flex flex-col gap-4 border2 p-5'>
                <div>{name}</div>
                <div>{lastname}</div>
                <div>{email}</div>
                <div>{phoneNumber}</div>
                <div>{skills}</div>
                <div>{city}</div>
                <div>{message}</div>
            </div>


        </div>
    )
};
export default login;
