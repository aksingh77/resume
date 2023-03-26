import ProgressBar from '../../../shared/common/ProgressBar'

const Skill = () => {

    const BasicStyle = [{
        title: "HTML/CSS",
        percent: '70%',
        icon: "html"
    },
    {
        title: "BOOTSTRAP ",
        percent: '70%',
        icon: 'bootstrap'
    },
    {
        title: "Tailwind Css",
        percent: '80%',
        icon: 'tailwind'
    },

    ]
    const scriptLanguage = [
        {
            title: "Javascript",
            percent: '50%',
            icon: 'js'
        },
        {
            title: "React Js",
            percent: '50%',
            icon: 'react'
        },
        {
            title: "Next Js",
            percent: '40%',
            icon: 'next'
        },
        {
            title: "Vue Js",
            percent: '40%',
            icon: 'vue'
        },


    ]

    const Backend = [{
        title: "Node js",
        percent: '30%',
        icon: 'node'
    },
    {
        title: "Express Js ",
        percent: '20%',
        icon: 'express'
    },
    ]

    const Database = [{
        title: "Mongo Db",
        percent: '20%',
        icon: 'mongo'
    },
    ]

    return (
        <>
            <div className="py-4">
                {BasicStyle.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
            <div className="py-4">
                {scriptLanguage.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
            <div className="py-4">
                {Backend.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
            <div className="py-4">
                {Database.map(({ title, percent, icon }, index) => (
                    <ProgressBar title={title} percent={percent} icon={icon} key={index} />
                ))}
            </div>
        </>
    )
}

export default Skill