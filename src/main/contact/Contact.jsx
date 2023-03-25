import React from 'react'
import { Element } from 'react-scroll'
const Contact = () => {
    const submitValue = (e) => {
        e.preventDefault()
        console.log('object');
    }
    return (
        <section className='contactForm bg-primary section'>
            <Element name="contact" className="element flex justify-center w-full">
                <div className="lg:container m-auto">
                    <div className="w-[59%] m-auto ">
                        <h4 className='text-4xl font-bold font-primary py-1 text-center'>Contact <span className='text-mainTextColor text-4xl'>Us</span></h4>
                        <p className='text-2xl font-semibold font-poppins text-center'>Connect With Us
                        </p>

                        <form className="inputForm flex flex-col gap-4 mt-7" onSubmit={submitValue}>
                            <div className="formField flex gap-4">
                                <input type="text" placeholder="Your First Name" className="input input-bordered input-md w-full " />
                                <input type="text" placeholder="Your Last Name" className="input input-bordered input-md w-full " />
                            </div>
                            <div className="formField flex gap-4">
                                <input type="text" placeholder="Your Email" className="input input-bordered input-md w-full " />
                                <input type="text" placeholder="Your Number" className="input input-bordered input-md w-full " />
                            </div>

                            <div className="formField">
                                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                            </div>
                            <div className="formField text-center">
                                <input type="submit" value="Submit" className='bg-buttonColor px-8 py-2 rounded-md font-semibold text-black font-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Contact