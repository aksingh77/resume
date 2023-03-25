import React from 'react'
import styles from "./Dashboard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypeAnimation } from 'react-type-animation'

const Dashboard = () => {


    return (
        <section className='dashboardSection bg-primary section'>
            <div className="lg:container px-4 m-auto text-white h-full">
                <div className="flex flex-col md:flex-row  gap-10 h-full">
                    <div className='md:w-[59%] lg:w[70%] flex flex-col justify-center'>
                        <p className='text-3xl font-semibold font-poppins'>Hello, It's Me</p>
                        <h4 className='text-6xl font-bold font-primary py-1'>Amit Pratap Singh</h4>
                        <p className='text-3xl font-semibold font-poppins '>And I'm a <TypeAnimation className='text-mainTextColor text-3xl' sequence={[' Frontend Developer', 2000, ' Software Developer', 3000]} speed={50} wrapper='span' repeat={Infinity} />
                        </p>
                        <p className='text-[1rem] font-poppins  tracking-wide pt-4 w-[90%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolor sequi ratione! Perferendis aperiam aliquam reiciendis nihil</p>


                        <div className="socialMedia flex gap-2 pt-4">
                            <div className='rounded-[50%] p-2 border border-white border-solid'>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} className='w-4 h-4 ' />
                            </div>
                            <div className='rounded-[50%] p-2 border border-white border-solid'><FontAwesomeIcon icon={['fab', 'instagram']} className='w-4 h-4 ' /></div>
                            <div className='rounded-[50%] p-2 border border-white border-solid'><FontAwesomeIcon icon={['fab', 'twitter']} className='w-4 h-4 ' /></div>
                            <div className='rounded-[50%] p-2 border border-white border-solid'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='w-4 h-4 ' /></div>
                        </div>
                    </div>
                    <div className='flex flex-1 items-center justify-center'>
                        <div className={`rotate-90 drop-shadow-lg`}>
                            <div className={`${styles.hex} rotate-90 drop-shadow-lg`}></div>

                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Dashboard