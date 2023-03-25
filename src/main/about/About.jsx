import React from 'react'
import styles from "./About.module.css"
import { Element } from 'react-scroll'
const About = () => {

    return (
        <section className='bg-primary section flex justify-center'>
            <Element name="about" className="element">
                <div className="lg:container px-4 m-auto text-white h-full">
                    <div className="flex  flex-col md:flex-row-reverse  gap-10 h-full">
                        <div className='md:w-[59%] lg:w[70%] flex flex-col justify-center'>
                            <h4 className='text-4xl font-bold font-primary py-1'>About <span className='text-mainTextColor text-4xl'>Me</span></h4>
                            <p className='text-2xl font-semibold font-poppins'>Frontend Developer
                            </p>
                            <p className='text-[1rem] font-poppins  tracking-wide pt-4 w-[90%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolor sequi ratione! Perferendis aperiam aliquam reiciendis nihil Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolor sequi ratione! Perferendis aperiam aliquam reiciendis nihil Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolor sequi ratione! Perferendis aperiam aliquam reiciendis nihil</p>



                        </div>
                        <div className='flex flex-1 items-center justify-center'>
                            <div className={`rotate-90 drop-shadow-lg`}>
                                <div className={`${styles.hex} rotate-90 drop-shadow-lg`}></div>

                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default About