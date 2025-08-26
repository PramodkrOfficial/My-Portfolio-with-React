import React from 'react';
import bspic from '../image/bspic.png';
import cnvpic from '../image/cnvpic.png';
import anmpic from '../image/anmpic.png';
import awdpic from '../image/awdpic.png';
// import twovid from '../video/Two.mp4';
// import bookstorevid from "../video/BookStore.mp4";

import bookstorevid from "/video/BookStore.mp4";
import twovid from '/video/Two.mp4';


function Projects() {
   
    // alert ("Welcome to the my website");
    const cardItem = [

        {
            id: 1,
            img: bspic,
            name: "BookStore Wapp",
            vurl: bookstorevid,
            surl: "https://github.com/PramodkrOfficial/UpSkillCampus"
        },
        {
            id: 2,
            img: anmpic,
            name: "Animated Wapp",
            vurl: twovid,
            surl: "https://github.com/PramodkrOfficial/Animated-Web-App-with-HTML-CSS-JAVASCRIPT"
        },
        {
            id: 3,
            img: cnvpic,
            name: "Convt Wapp",
            vurl: twovid
        },
        {
            id: 4,
            img: awdpic,
            name: "Awarded Wapp",
            vurl: twovid

        },
    ]
    return (
        <>
            <div name='Projects' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Projects</h1>
                    <span className='underline font-semibold'>Featured Projects</span>
                    <div className='grid grid-cols-1 md:grid-cols-4 my-5'>
                        {
                            cardItem.map(({ id, img, vurl, name, surl }) => (
                                <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                    <img src={img} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="reload" />
                                    <div>
                                        <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                        <p className='px-2 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, earum!</p>
                                        <div className='px-6 py-4 space-x-3 justify-around'>
                                            < button
                                                className='bg-blue-700 hover:bg-pink-700 text-white font-bold px-4 py-2 rounded-xl'
                                            ><a href={vurl}>Video</a>
                                            </button>
                                            <button className='bg-green-600 hover:bg-pink-800 text-white font-bold px-4 py-2 rounded-xl'>
                                                <a href={surl}>Source Code</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects