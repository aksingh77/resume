import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
// import TopHeader from './TopHeader'

const Header = () => {
    var Scroll = require('react-scroll');

    var Link = Scroll.Link;
    return (
        <section className='bg-primary sticky w-full top-0 z-[9999] '>
            {/* <div className=' border-b-2 border-gray-100 border-opacity-30'>
                <TopHeader /> 
            </div>  */}
            <div className="lg:container lg:m-auto px-4 lg:px-1">

                <div className="navbar  h-[70px]">
                    <div className='navbar-start'>
                        <h4 className='font-poppins font-extrabold text-white text-xl tracking-[4px] uppercase'>Portfolio</h4>
                    </div>
                    <div className="menu navbar-end lg:hidden items-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className={`${style.menuActive}menu menu-compact dropdown-content mt-3 p-2 shadow-xl rounded-box w-52 flex gap-3text-white text-sm tracking-[3px] uppercase backdrop-blur-xl`}>
                                <li className={`${style.menuActive}`}><NavLink to="/">Home</NavLink></li>
                                <li className={`${style.menuActive}`}><NavLink to="#about">About</NavLink></li>
                                <li className={`${style.menuActive}`}><NavLink to="#contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu menuLinkStyle navbar-end hidden lg:flex items-end">
                        <ul tabIndex={0} className="flex gap-3  text-white text-sm tracking-[3px] uppercase">
                            <li className={`${style.menuActive}`}>
                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-200} duration={1000} >
                                    Home
                                </Link>
                            </li>
                            <li className={`${style.menuActive}`} >  <Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={1000} >
                                About
                            </Link></li>
                            <li className={`${style.menuActive}`} end>  <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-200} duration={1000} >
                                Contact
                            </Link></li>
                        </ul>
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Header