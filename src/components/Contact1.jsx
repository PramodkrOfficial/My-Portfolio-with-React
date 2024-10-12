import React from 'react'
import { navigate } from 'gatsby-link'
// import Layout from '../layout'

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

export default function Contact1() {
//   const [state, setState] = React.useState({})

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const form = e.target
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({
//         'form-name': form.getAttribute('name'),
//         ...state,
//       }),
//     })
//       .then(() => console.log(form.getAttribute('action')))
//       .catch((error) => alert(error))
//   }

  return (
    <>
     <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </>
  
  )
}



// import React from 'react';

// // import { navigate } from 'gatsby'
// // import { useForm } from 'react-hook-form';

// // function encode(data) {
// //     return Object.keys(data)
// //         .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
// //         .join('&')
// // }

// function Contact1() {


  

//     /* Here’s the juicy bit for posting the form submission */



  
//       return (
//         <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
//           <p>
//             <label>
//               Your Name: <input type="text" name="name"  />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your Email: <input type="email" name="email" />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message: <textarea name="message" />
//             </label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       );
//     }
  

  

//     // <form name="contact" method="POST" netlify>
//     //     <p>
//     //         <label>Your Name: <input type="text" name="name" /></label>
//     //     </p>
//     //     <p>
//     //         <label>Your Email: <input type="email" name="email" /></label>
//     //     </p>
//     //     <p>
//     //         <label>Your Role: <select name="role[]" multiple>
//     //             <option value="leader">Leader</option>
//     //             <option value="follower">Follower</option>
//     //         </select></label>
//     //     </p>
//     //     <p>
//     //         <label>Message: <textarea name="message"></textarea></label>
//     //     </p>
//     //     <p>
//     //         <button type="submit">Send</button>
//     //     </p>
//     // </form>




//     // const [state, setState] = React.useState({})

//     // const handleChange = (e) => {
//     //     setState({ ...state, [e.target.name]: e.target.value })
//     // }

//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     const form = e.target
//     //     fetch('/', {
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     //         body: encode({
//     //             'form-name': form.getAttribute('name'),
//     //             ...state,
//     //         }),
//     //     })
//     //         .then(() => navigate(form.getAttribute('action')))
//     //         .catch((error) => alert(error))
//     // }

  
        
//             {/* <h1>Contact</h1>
//             <form
//                 name="contact"
//                 method="post"
//                 action="/thanks/"
//                 data-netlify="true"
//                 data-netlify-honeypot="bot-field"
//                 onSubmit={handleSubmit}
//             >
//                 {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//                 {/* <input type="hidden" name="form-name" value="contact" />
//                 <p hidden>
//                     <label>
//                         Don’t fill this out: <input name="bot-field" onChange={handleChange} />
//                     </label>
//                 </p>
//                 <p>
//                     <label>
//                         Your name:
//                         <br />
//                         <input type="text" name="name" onChange={handleChange} />
//                     </label>
//                 </p>
//                 <p>
//                     <label>
//                         Your email:
//                         <br />
//                         <input type="email" name="email" onChange={handleChange} />
//                     </label>
//                 </p>
//                 <p>
//                     <label>
//                         Message:
//                         <br />
//                         <textarea name="message" onChange={handleChange} />
//                     </label>
//                 </p>
//                 <p>
//                     <button type="submit">Send</button>
//                 </p>
//             </form> */} 

// {/* <form name="contact" netlify>
//   <p>
//     <label>Name <input type="text" name="name" /></label>
//   </p>
//   <p>
//     <label>Email <input type="email" name="email" /></label>
//   </p>
//   <p>
//     <button type="submit">Send</button>
//   </p>
// </form> */}


// // const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     formState: { errors },
// // } = useForm()
// // const onSubmit = (data) => console.log(data)


// // return (
// //     <>

// //     return (
// //         <>
// //             <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
// //                 {/* You still need to add the hidden input with the form name to your JSX form */}
// //                 <input type="hidden" name="form-name" value="contact" />
// //                 <button type="submit">Send</button>

// //             </form>
// //             {/* name="contact" netlify  
// //                 <input type="text" name="name" />
// //                 <input type="email" name="email" />
// //                 <textarea name="message"></textarea>
// //                 <button type='submit'>submit</button>

// //             <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>

// //                 <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
// //                 <span>Please fill out the form below to contact me</span>
// //                 <form>
// //                     <div className='flex flex-col items-center justify-center mt-5'>

// //                         name="contact" netlify
// //                         method="post"
// //                         onSubmit={handleSubmit(onSubmit)}
// //                         className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
// //                         <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
// //                         <input type="hidden" name="form-name" value="contact" />

// //                     </div>
// //                     <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
// //                     <div className='flex flex-col mb-4'>
// //                         <label className='block text-gray-700' htmlFor="name">Full Name</label>
// //                         <input
// //                             type='text' name='name'
// //                             {...register("name", { required: true })}
// //                             className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' placeholder='Enter your full name' />
// //                         {errors.name && <span>This field is required</span>}
// //                     </div>
// //                     <div className='flex flex-col mb-4'>
// //                         <label className='block text-gray-700' htmlFor="name">Email Address</label>
// //                         <input
// //                             type='email' name='email'
// //                             {...register("email", { required: true })}
// //                             className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' placeholder='Enter your email' />

// //                         {errors.email && <span>This field is required</span>}
// //                     </div>

// //                     <div className='flex flex-col mb-4'>
// //                         <label className='block text-gray-700' htmlFor="name">Message</label>
// //                         <textarea
// //                             {...register("message", { required: true })}
// //                             className='outline-none border-2 border-gray-300  rounded-xl h-20 py-2 px-3 text-gray-700'
// //                             id='message'
// //                             name="message"
// //                             type="text"
// //                             rows='4'
// //                             placeholder='Type your message here'
// //                         >
// //                         </textarea>
// //                         {errors.message && <span>This field is required</span>}
// //                     </div>

// //                     <p>
// //                         <button type="submit" className='bg-gray-800 text-white size-full rounded-xl items-center px-3 py-2 hover:bg-pink-900 hover:scale-105 duration-300'>Send</button>
// //                     </p>
// //                 </form>


// //             </div > */}

// //         </>
// //     )
// // }





// export default Contact1;
