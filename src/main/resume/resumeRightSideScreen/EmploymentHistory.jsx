import React from 'react'

const EmploymentHistory = () => {
    let ExperienceData = [
        {
            title: "WordPress developer (Intern) at Fabulous Media Pvt. Ltd.",
            year: "january 2019 - july 2019"
        },
        {
            title: "Junior WordPress Developer at Fabulous Media Pvt. Ltd.",
            year: "january 2019 - july 2019"
        },
        {
            title: "WordPress developer (Intern) at Fabulous Media Pvt. Ltd.",
            year: "january 2019 - july 2019"
        },
        {
            title: "WordPress developer (Intern) at Fabulous Media Pvt. Ltd.",
            year: "january 2019 - july 2019"
        },
    ]
    return (
        <>
            <div className="grid grid-cols-2 gap-4">

                {ExperienceData.map(({ title, year }, index) => (
                    <div className=" shadow-xl p-4" key={index}>
                        <h4 className="text-md font-secondary text-white/80 font-light  tracking-[2px]">{title}</h4>
                        <p className='font-primary  uppercase text-[12px] tracking-[2px] mb-2 text-white/40'>{year}</p>

                    </div>))}

            </div>
        </>
    )
}

export default EmploymentHistory