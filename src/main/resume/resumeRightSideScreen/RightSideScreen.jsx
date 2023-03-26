import React from 'react'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Skill from './Skill'

const RightSideScreen = () => {
    return (
        <section>
            <div className='relative mb-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>About Me</h4>
                <p className='text-md font-light text-white/70 font-sans tracking-[1px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero impedit obcaecati accusamus dignissimos temporibus, voluptatibus labore ex iusto natus similique. Distinctio fuga ratione.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero impedit obcaecati accusamus dignissimos temporibus, voluptatibus labore ex iusto natus similique. </p>
            </div>
            <div className='my-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>Employment History </h4>
                <EmploymentHistory />
            </div>
            <div className="my-7">
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>Skill</h4>
                <Skill />
            </div>
            <div className='my-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>Education </h4>
                <Education />
            </div>
        </section>
    )
}

export default RightSideScreen