import React from 'react';
import { useForm } from 'react-hook-form';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...data,
      }),
    })
      .then(() => {
        alert('Message sent!');
        reset();
      })
      .catch(error => {
        alert('Error: ' + error);
      });
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-200 w-full max-w-md px-8 py-6 rounded-xl mt-6"
      >
        {/* Netlify Hidden Inputs */}
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"></input>
        <input type="hidden" name="form-name" value="contact" />
        

        <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

        {/* Name Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="block text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter your full name"
          />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        {/* Email Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        {/* Message Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            {...register("message", { required: true })}
            className="outline-none border-2 border-gray-300 rounded-xl h-20 py-2 px-3 text-gray-700"
            placeholder="Type your message here"
          />
          {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 text-white w-full rounded-xl px-3 py-2 hover:bg-pink-900 hover:scale-105 duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact1;
