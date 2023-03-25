import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './header/Header';
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from './footer/Footer';

config.autoAddCss = false
library.add(fas, fab)

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout