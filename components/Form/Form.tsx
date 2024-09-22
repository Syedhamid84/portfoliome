"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { formSchema } from "@/components/validationSchema/schema";
import { useRouter } from 'next/router';

const ResumeForm = () => {

    const router = useRouter()
    // const { formvalues, setFormvalues } = useContext(DataContext); //aceess the context
    const [formvalues, setFormvalues] = useState({
        firstname: "",
        lastname: "",
        useremail: "",
        usernumber: "",
        userskills: "",
        usercity: "",
        usermessage: "",
    });

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            useremail: "",
            usernumber: "",
            userskills: "",
            usercity: "",
            usermessage: "",
        },


        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("all input values", formvalues);
            // setFormvalues(values);

            // pushing data by url query
            // const query = new URLSearchParams(formvalues).toString();
            // router.push(`/formDetail?${query}`)

            localStorage.setItem("forms_values", JSON.stringify(formvalues));
            router.push(`/formDetail`)

            // var object = localStorage[form_values];
            // localStorage[form_values] = FormData;




            resetForm();
            setFormvalues({
                firstname: "",
                lastname: "",
                useremail: "",
                usernumber: "",
                userskills: "",
                usercity: "",
                usermessage: "",
            });
            // alert("form submitted successfully")
        }

    });

    const { errors, touched, handleChange, handleBlur, handleSubmit } = formik;

    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        handleChange(e);

        // update the local state with new values
        setFormvalues((prevValues) => ({
            ...prevValues,
            [name]: value,


        }));
    }

    const handlekeydown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    };



    return (
        <section className='flex flex-col md:items-center gap-5 p-4 md:p-10  border border-green-00'>
            <div className='flex justify-center w-full'>

                <h1 className='text-4xl font-semibold'>Resume Form</h1>
            </div>
            <form onSubmit={handleSubmit}
                onKeyDown={handlekeydown}
                className='flex flex-col justify-center gap-8 p-5  border-2 border-gray-500 rounded-xl  md:max-w-full bg-green-40'>

                <div className='flex flex-col md:flex-row gap-8 bg-ed-50'>
                    <div className='flex flex-col gap-3 w-full md:w-[380px] '>
                        <Label>First Name</Label>
                        <Input
                            id="firstname"
                            name="firstname"
                            value={formvalues.firstname}
                            onChange={handleInputchange}
                            onBlur={handleBlur}
                            placeholder='First name' type='text' className='w-full py-6' />

                        {touched.firstname && typeof errors.firstname === 'string' && (
                            <span className='text-red-500 text-sm p-1'>{errors.firstname}</span>
                        )}

                    </div>

                    <div className='flex flex-col gap-3 w-full md:w-[380px]'>
                        <Label>Last Name</Label>
                        <Input
                            id="lastname"
                            name="lastname"
                            value={formvalues.lastname}
                            onChange={handleInputchange}
                            onBlur={handleBlur}
                            placeholder='Last name' type='text' className='w-full py-6' />
                        {typeof errors.lastname === 'string' && touched.lastname && (
                            <span className='text-red-500 text-sm p-1'>
                                {errors.lastname}
                            </span>
                        )}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex flex-col gap-3 w-full md:w-[380px]'>
                        <Label>Email Address</Label>
                        <Input
                            id="useremail"
                            name="useremail"
                            value={formvalues.useremail}
                            onChange={handleInputchange}
                            onBlur={handleBlur}
                            placeholder='Email Address' type='email' className='w-full py-6' />
                        {typeof errors.useremail === 'string' && touched.useremail && (
                            <span className='text-red-500 text-sm p-1'>
                                {errors.useremail}
                            </span>
                        )}
                    </div>

                    <div className='flex flex-col gap-3 w-full md:w-[380px]'>
                        <Label>Phone Number</Label>
                        <Input
                            id="usernumber"
                            name="usernumber"
                            value={formvalues.usernumber}
                            onChange={handleInputchange}
                            onBlur={handleBlur}
                            placeholder='Phone Number' type='tel' className='w-full py-6' />
                        {typeof errors.usernumber === 'string' && touched.usernumber && (
                            <span className='text-red-500 text-sm p-1'>
                                {errors.usernumber}
                            </span>
                        )}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex flex-col gap-3 w-full md:w-[380px]'>
                        <Label>Skills</Label>
                        <Input
                            id="userskills"
                            name="userskills"
                            value={formvalues.userskills}
                            onChange={handleInputchange}
                            onBlur={handleBlur}
                            placeholder='Skills names' type='text' className='w-full py-6' />
                        {typeof errors.userskills === 'string' && touched.userskills && (
                            <span className='text-red-500 text-sm p-1'>
                                {errors.userskills}
                            </span>
                        )}
                    </div>

                    <div className='flex flex-col gap-3 w-full md:w-[380px]'>
                        <Label>City</Label>
                        <Input
                            id="usercity"
                            name="usercity"
                            value={formvalues.usercity}
                            onChange={handleInputchange}
                            onBlur={handleBlur}
                            placeholder='Where you live' type='text' className='w-full py-6' />
                        {typeof errors.usercity === 'string' && touched.usercity && (
                            <span className='text-red-500 text-sm p-1'>
                                {errors.usercity}
                            </span>
                        )}
                    </div>
                </div>

                <div className='flex flex-col gap-3 '>
                    <Label>Message</Label>

                    <Textarea
                        id="usermessage"
                        name="usermessage"
                        value={formvalues.usermessage}
                        onChange={handleInputchange}
                        onBlur={handleBlur}
                        placeholder="Type your message here" className='py-6 w-full resize-none' />
                    {typeof errors.usermessage === 'string' && touched.usermessage && (
                        <span className='text-red-500 text-sm p-1'>
                            {errors.usermessage}
                        </span>
                    )}
                </div>

                <div>
                    <Button
                        type='submit'
                        className="text-lg font-semibold bg-green-500 px-10 py-6">
                        Submit
                    </Button>
                </div>

            </form>
        </section>

    )
};
export default ResumeForm;
