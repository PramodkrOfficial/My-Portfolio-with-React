import React from 'react';
import { useForm } from 'react-hook-form';


function Contact1() {
    // <form name="contact" method="POST" netlify>
    //     <p>
    //         <label>Your Name: <input type="text" name="name" /></label>
    //     </p>
    //     <p>
    //         <label>Your Email: <input type="email" name="email" /></label>
    //     </p>
    //     <p>
    //         <label>Your Role: <select name="role[]" multiple>
    //             <option value="leader">Leader</option>
    //             <option value="follower">Follower</option>
    //         </select></label>
    //     </p>
    //     <p>
    //         <label>Message: <textarea name="message"></textarea></label>
    //     </p>
    //     <p>
    //         <button type="submit">Send</button>
    //     </p>
    // </form>


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)


    // return (
    //     <>
            {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form> */}

            {/* <div id="root"></div> */}
            // <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>

    return (
        <>
            <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>

                <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form

                        name="contact" netlify hidden
                        method="post"
                        onSubmit={handleSubmit(onSubmit)}
                        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <input type="hidden" name="form-name" value="contact" />

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="name">Full Name</label>
                            <input
                                {...register("name", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                name="name"
                                type="text"
                                placeholder='Enter your full name' />
                            {errors.name && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="name">Email Address</label>
                            <input
                                {...register("email", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                name="email"
                                type="text"
                                placeholder='Enter your email' />

                        name='contact' method='POST' netlify
                        // onSubmit={handleSubmit(onSubmit)}
                        // action=""
                        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="name">Full Name</label>
                            <input
                                type='text' name='name'
                                {...register("name", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='name' type="text" placeholder='Enter your full name' />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="name">Email Address</label>
                            <input
                                type='email' name='email'
                                {...register("email", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='email' type="text" placeholder='Enter your email' />

                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="name">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                className='outline-none border-2 border-gray-300  rounded-xl h-20 py-2 px-3 text-gray-700'
                                id='message'

                                name="message"
                                type="text"

                                name='message'

                                rows='4'
                                placeholder='Type your message here'
                            >
                            </textarea>
                            {errors.message && <span>This field is required</span>}
                        </div>

                        <p>
                            <button type="submit" className='bg-gray-800 text-white size-full rounded-xl items-center px-3 py-2 hover:bg-pink-900 hover:scale-105 duration-300'>Send</button>
                        </p>

                        <button type='submit' className='bg-gray-800 text-white size-full rounded-xl items-center px-3 py-2 hover:bg-pink-900 hover:scale-105 duration-300'>Send</button>

                    </form>
                </div>
            </div>
        </>
    )
}





export default Contact1;
