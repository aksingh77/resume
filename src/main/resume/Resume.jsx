
import LeftSideScreen from './resumeLeftSideScreen/LeftSideScreen'
import RightSideScreen from './resumeRightSideScreen/RightSideScreen'
const Resume = () => {
    return (
        <section className=' bg-primary'>
            <div className="resume container m-auto">
                <div className="flex gap-7">
                    <div className='w-[30%] bg-[#201e1b] h-full p-4 rounded-xl border border-goldenColor'>
                        <LeftSideScreen />
                    </div>
                    <div className='w-[70%] bg-[#201e1b] h-full p-4 rounded-xl border border-goldenColor'>
                        <RightSideScreen />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume