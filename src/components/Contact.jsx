import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });

    const [isSuccess, setIsSuccess] = React.useState(false);
    const [Message, setMessage] = React.useState("");

    const userName = useWatch({
        control,
        name: "name",
        defaultValue: "Someone"
    });

    useEffect(() => {
        setValue('subject', `${userName} sent a message from Website`);
    }, [userName, setValue]);

    const onSubmit = async (data) => {
        console.log(data);
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data, null, 2),
        })
            .then(async (response) => {
                const json = await response.json();
                if (json.success) {
                    setIsSuccess(true);
                    setMessage(json.message);
                    reset();
                } else {
                    setIsSuccess(false);
                    setMessage(json.message);
                }
            })
            .catch((error) => {
                setIsSuccess(false);
                setMessage("Client Error. Please check the console for more info.");
                console.error(error);
            });
    };

    return (
        <>
            <div className="max-w-screen-2xl container min-w-full mx-auto px-4 md:px-20 my-16">
                <h1 className="text-3xl font-bold mb-4">Contact me</h1>
                <span>Please fill out the form below to contact me</span>
            </div>
            <div name="Contact" className="max-w-screen-2xl container min-w-full flex justify-center mx-auto px-4 md:px-20 my-16">
                <div className="bg-slate-300 w-full max-w-md px-8 py-6 rounded-xl mt-6">
                    {!isSubmitSuccessful && (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="hidden"
                                value="ef070c5c-f1df-4945-9a66-e7a45c807365" // 🔐 Replace with your actual Web3Forms key
                                {...register("access_key")}
                            />
                            <input
                                type="hidden"
                                {...register("subject")}
                            />
                            <input
                                type="hidden"
                                value="Mission Control"
                                {...register("from_name")}
                            />
                            <input
                                type="checkbox"
                                className="hidden"
                                style={{ display: "none" }}
                                {...register("botcheck")}
                            />

                            {/* Name Field */}
                            <div className="mb-5 mt-4">
                                <p className="block text-slate-900">Full Name</p>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    autoComplete="off"
                                    aria-label="Full Name"
                                    className={`shadow appearance-none w-full max-w-96 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-4 ${errors.name
                                        ? "border-red-600 focus:border-red-600 ring-red-100"
                                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                                        }`}
                                    {...register("name", {
                                        required: "Full name is required",
                                        maxLength: 80,
                                    })}
                                />
                                {errors.name && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.name.message}</small>
                                    </div>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="mb-5">
                                <label htmlFor="email_address" className="sr-only">
                                    Email Address
                                </label>
                                <p className="block text-slate-900">Email Address</p>
                                <input
                                    id="email_address"
                                    type="email"
                                    placeholder="Email Address"
                                    autoComplete="off"
                                    aria-label="Email Address"
                                    className={`shadow appearance-none w-full max-w-96 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-4 ${errors.name
                                        ? "border-red-600 focus:border-red-600 ring-red-100"
                                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                                        }`}
                                    {...register("email", {
                                        required: "Enter your email",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Please enter a valid email",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.email.message}</small>
                                    </div>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className="mb-3">
                                <p>Write your query</p>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    aria-label="Your Message"
                                    className={`shadow appearance-none w-full max-w-96 px-3 py-2 text-gray-700 border-2 rounded-lg focus:outline-none focus:ring-4 ${errors.name
                                        ? "border-red-600 focus:border-red-600 ring-red-100"
                                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                                        }`}
                                    {...register("message", { required: "Enter your Message" })}
                                />
                                {errors.message && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.message.message}</small>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full max-w-96 py-4 text-white transition-colors bg-slate-700 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-indigo-200 px-7 umami--click--contact-submit">
                                {isSubmitting ? (
                                    <svg
                                        className="w-5 h-4 mx-auto text-white animate-spin"
                                        // className="text-xl font-semibold mb-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4" />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    )}

                    {/* Success Message */}
                    {isSubmitSuccessful && isSuccess && (
                        <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                            <svg width="100" height="100" className="text-green-300" viewBox="0 0 100 100" fill="none">
                                <path
                                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144..."
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />
                            </svg>
                            <h3 className="py-5 text-2xl text-green-500">Success</h3>
                            <p className="text-gray-700 md:px-3">{Message}</p>
                            <button
                                className="mt-6 text-indigo-600 focus:outline-none"
                                onClick={() => reset()}>
                                Go back
                            </button>
                        </div>
                    )}

                    {/* Failure Message */}
                    {isSubmitSuccessful && !isSuccess && (
                        <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                            <svg width="97" height="97" viewBox="0 0 97 97" className="text-red-400" fill="none">
                                <path
                                    d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95..."
                                    stroke="CurrentColor"
                                    strokeWidth="3"
                                />
                            </svg>
                            <h3 className="text-2xl text-red-400 py-7">Oops, Something went wrong!</h3>
                            <p className="text-gray-300 md:px-3">{Message}</p>
                            <button className="mt-5 focus:outline-none" onClick={() => reset()}>
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <p className="text-center text-sm">
                <a
                    href="https://web3forms.com/"
                    target="_blank"
                    rel="noopener"
                    className="text-indigo-500">
                    Forms by Web3Forms
                </a>
            </p>
        </>
    );
}






