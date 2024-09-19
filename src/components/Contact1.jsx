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


    return (
        <>
            {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form> */}

            {/* <div id="root"></div> */}
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'></div>
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span>Please fill out the form below to contact me</span>
            <div className='flex flex-col items-center justify-center mt-5'></div>
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </>
    )
}







export default Contact1;
