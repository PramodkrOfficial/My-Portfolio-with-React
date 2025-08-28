// import React, { useEffect } from "react";
// import { useForm, useWatch } from "react-hook-form";

// export default function ContactForm() {
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         reset,
//         control,
//         formState: { errors, isSubmitSuccessful, isSubmitting },
//     } = useForm({
//         mode: "onTouched",
//     });

//     const [isSuccess, setIsSuccess] = React.useState(false);
//     const [Message, setMessage] = React.useState("");

//     const userName = useWatch({
//         control,
//         name: "name",
//         defaultValue: "Someone"
//     });

//     useEffect(() => {
//         setValue('subject', `${userName} sent a message from Website`);
//     }, [userName, setValue]);

//     const onSubmit = async (data) => {
//         console.log(data);
//         await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(data, null, 2),
//         })
//             .then(async (response) => {
//                 const json = await response.json();
//                 if (json.success) {
//                     setIsSuccess(true);
//                     setMessage(json.message);
//                     reset();
//                 } else {
//                     setIsSuccess(false);
//                     setMessage(json.message);
//                 }
//             })
//             .catch((error) => {
//                 setIsSuccess(false);
//                 setMessage("Client Error. Please check the console for more info.");
//                 console.error(error);
//             });
//     };

//     return (
//         <>
//             <div className="max-w-screen-2xl container min-w-full mx-auto px-4 md:px-20 my-16">
//                 <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//                 <span>Please fill out the form below to contact me</span>
//             </div>
//             <div name="Contact" className="max-w-screen-2xl container min-w-full flex justify-center mx-auto px-4 md:px-20 my-16">
//                 <div className="bg-slate-300 w-full max-w-md px-8 py-6 rounded-xl mt-6">
//                     {!isSubmitSuccessful && (
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <input
//                                 type="hidden"
//                                 value="ef070c5c-f1df-4945-9a66-e7a45c807365" // 🔐 Replace with your actual Web3Forms key
//                                 {...register("access_key")}
//                             />
//                             <input
//                                 type="hidden"
//                                 {...register("subject")}
//                             />
//                             <input
//                                 type="hidden"
//                                 value="Mission Control"
//                                 {...register("from_name")}
//                             />
//                             <input
//                                 type="checkbox"
//                                 className="hidden"
//                                 style={{ display: "none" }}
//                                 {...register("botcheck")}
//                             />

//                             {/* Name Field */}
//                             <div className="mb-5 mt-4">
//                                 <p className="block text-slate-900">Full Name</p>
//                                 <input
//                                     type="text"
//                                     placeholder="Full Name"
//                                     autoComplete="off"
//                                     aria-label="Full Name"
//                                     className={`shadow appearance-none w-full max-w-96 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-4 ${errors.name
//                                         ? "border-red-600 focus:border-red-600 ring-red-100"
//                                         : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
//                                         }`}
//                                     {...register("name", {
//                                         required: "Full name is required",
//                                         maxLength: 80,
//                                     })}
//                                 />
//                                 {errors.name && (
//                                     <div className="mt-1 text-red-600">
//                                         <small>{errors.name.message}</small>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Email Field */}
//                             <div className="mb-5">
//                                 <label htmlFor="email_address" className="sr-only">
//                                     Email Address
//                                 </label>
//                                 <p className="block text-slate-900">Email Address</p>
//                                 <input
//                                     id="email_address"
//                                     type="email"
//                                     placeholder="Email Address"
//                                     autoComplete="off"
//                                     aria-label="Email Address"
//                                     className={`shadow appearance-none w-full max-w-96 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-4 ${errors.name
//                                         ? "border-red-600 focus:border-red-600 ring-red-100"
//                                         : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
//                                         }`}
//                                     {...register("email", {
//                                         required: "Enter your email",
//                                         pattern: {
//                                             value: /^\S+@\S+$/i,
//                                             message: "Please enter a valid email",
//                                         },
//                                     })}
//                                 />
//                                 {errors.email && (
//                                     <div className="mt-1 text-red-600">
//                                         <small>{errors.email.message}</small>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Message Field */}
//                             <div className="mb-3">
//                                 <p>Write your query</p>
//                                 <textarea
//                                     name="message"
//                                     placeholder="Your Message"
//                                     aria-label="Your Message"
//                                     className={`shadow appearance-none w-full max-w-96 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-4 ${errors.name
//                                         ? "border-red-600 focus:border-red-600 ring-red-100"
//                                         : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
//                                         }`}
//                                     {...register("message", { required: "Enter your Message" })}
//                                 />
//                                 {errors.message && (
//                                     <div className="mt-1 text-red-600">
//                                         <small>{errors.message.message}</small>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="w-full max-w-96 py-4 text-white transition-colors bg-slate-700 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-indigo-200 px-7 umami--click--contact-submit">
//                                 {isSubmitting ? (
//                                     <svg
//                                         className="w-5 h-4 mx-auto text-white animate-spin"
//                                         // className="text-xl font-semibold mb-4"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24">
//                                         <circle
//                                             className="opacity-25"
//                                             cx="12"
//                                             cy="12"
//                                             r="10"
//                                             stroke="currentColor"
//                                             strokeWidth="4" />
//                                         <path
//                                             className="opacity-75"
//                                             fill="currentColor"
//                                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                                     </svg>
//                                 ) : (
//                                     "Send Message"
//                                 )}
//                             </button>
//                         </form>
//                     )}

//                     {/* Success Message */}
//                     {isSubmitSuccessful && isSuccess && (
//                         <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
//                             <svg width="100" height="100" className="text-green-300" viewBox="0 0 100 100" fill="none">
//                                 <path
//                                     d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144..."
//                                     stroke="currentColor"
//                                     strokeWidth="3"
//                                 />
//                             </svg>
//                             <h3 className="py-5 text-2xl text-green-500">Success</h3>
//                             <p className="text-gray-700 md:px-3">{Message}</p>
//                             <button
//                                 className="mt-6 text-indigo-600 focus:outline-none"
//                                 onClick={() => reset()}>
//                                 Go back
//                             </button>
//                         </div>
//                     )}

//                     {/* Failure Message */}
//                     {isSubmitSuccessful && !isSuccess && (
//                         <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
//                             <svg width="97" height="97" viewBox="0 0 97 97" className="text-red-400" fill="none">
//                                 <path
//                                     d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95..."
//                                     stroke="CurrentColor"
//                                     strokeWidth="3"
//                                 />
//                             </svg>
//                             <h3 className="text-2xl text-red-400 py-7">Oops, Something went wrong!</h3>
//                             <p className="text-gray-300 md:px-3">{Message}</p>
//                             <button className="mt-5 focus:outline-none" onClick={() => reset()}>
//                                 Try Again
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <p className="text-center text-sm">
//                 <a
//                     href="https://web3forms.com/"
//                     target="_blank"
//                     rel="noopener"
//                     className="text-indigo-500">
//                     Forms by Web3Forms
//                 </a>
//             </p>
//         </>
//     );
// }



// Contact Component with Form Animations

import React, { useState } from "react";
import AnimationWrapper from "./AnimationWrapper";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "pramodkr@example.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 12345 67890",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Gurugram, Haryana, India",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 overflow-hidden"
    >
      <AnimationWrapper animation="fadeInUp" delay={200}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Get In Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>
      </AnimationWrapper>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <AnimationWrapper animation="fadeInLeft" delay={400}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h2>
          </AnimationWrapper>

          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <AnimationWrapper
                key={index}
                animation="fadeInLeft"
                delay={600 + index * 200}
              >
                <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <IconComponent className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>

        {/* Contact Form */}
        <AnimationWrapper animation="fadeInRight" delay={800}>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <FaUser className="absolute top-4 left-4 text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="relative group">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="relative group">
                <FaComment className="absolute top-4 left-4 text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300" />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform transition-transform duration-500 ${
                    isSubmitting ? "translate-x-0" : "translate-x-full"
                  }`}
                ></div>
                <div className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </div>
              </button>
            </form>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
}

export default Contact;




