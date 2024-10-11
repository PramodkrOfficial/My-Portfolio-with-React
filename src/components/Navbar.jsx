import React, { useState } from 'react';
import pic from '../image/myimg.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: 'Home'
        },
        {
            id: 2,
            text: 'About'
        },
        {
            id: 3,
            text: 'Projects'
        },
        {
            id: 4,
            text: 'Experience'
        },
        {
            id: 5,
            text: 'Contact'
        },
    ]
    return (
        <>
            <div class="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full' alt="reload" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Pram<span className='text-pink-600 text-2xl'>od</span>
                            <p className='text-sm'>web<span className='text-pink-600'>developer</span></p>
                        </h1>
                    </div>
                    {/*  desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-125 duration-200 cursor-pointer' key={id}>
                                        <Link activeClass="active"
                                            to={text}
                                            spy={true}
                                            smooth={true}
                                            hashSpy={true}
                                            offset={-70}
                                            duration={500}
                                            delay={100}
                                            isDynamic={true}
                                            ignoreCancelEvents={false}
                                            spyThrottle={500}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>{menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}</div>
                    </div>
                </div>
                {/*  mobile navbar  */}
                {
                    menu && (
                        <div className='bg-white'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-2xl'>
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className='hover:scale-x-125 duration-200 font-semibold cursor-pointer'
                                            key={id}>
                                            {/* {text} */}
                                            <Link onClick={() => setMenu(!menu)}
                                                activeClass="active"
                                                to={text}
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-70}
                                                duration={500}
                                                delay={100}
                                                isDynamic={true}
                                                ignoreCancelEvents={false}
                                                spyThrottle={500}
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar;