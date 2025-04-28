import React from 'react';
import html2 from '../image/html2.png';
import css1 from '../image/css1.png';
import javascript from '../image/javascript.png';

import java from '../image/java.png';
import python from '../image/python.png';
import spring from '../image/spring.png';
import springboot from '../image/springboot.jpg';

import docker from '../image/dockerr.png';
import github from '../image/github2.png';
import mysql from '../image/mysqlpic.png'

import mongodb from '../image/mongodbpic.jpeg'
import react from '../image/reactjs.png';
import express from '../image/exp.png';
import nodejs from '../image/node.png'




function Experience() {
    const cardItem = [
        {
            id: 1,
            img: html2,
            name: "HTML"
        },
        {
            id: 2,
            img: css1,
            name: "CSS"
        },
        {
            id: 3,
            img: javascript,
            name: "JAVASCRIPT"
        },
        {
            id: 4,
            img: java,
            name: "JAVA"

        },
        {
            id: 5,
            img: python,
            name: "PYTHON"

        },
        {
            id: 6,
            img: spring,
            name: "SPRING"

        },
        {
            id: 7,
            img: springboot,
            name: "SPRINGBOOT"

        },
        {
            id: 8,
            img: docker,
            name: "DOCKER"

        },
        {
            id: 9,
            img: github,
            name: "GITHUB"
            
        },
        {
            id: 10,
            img: mongodb,
            name: "MONGODB"

        },
        {
            id: 11,
            img: express,
            name: "EXPRESS"
            
        },
        {
            id: 12,
            img: react,
            name: "REACT"

        },
        {
            id: 13,
            img: nodejs,
            name: "NODE JS"

        },
        {
            id: 14,
            img: mysql,
            name: "MYSQL"
        }
        
    ]
    return (
        <>
            <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                    <span className='underline font-semibold'>Featured Tools</span>
                    <p className='text-cyan-800 font-bold'>I've more than 1 year of Experience in below technologies with good knowledge.</p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                        {
                            cardItem.map(({ id, img, name }) => (
                                <div className='flex flex-col items-center justify-center border-[2px] rounded-full shadow-md md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                    <img src={img} className='w-[150px] rounded-full' alt="reload" />
                                    <div>
                                        <div className=''>{name}</div>
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

export default Experience;