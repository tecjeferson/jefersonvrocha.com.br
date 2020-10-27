import React from 'react'
import Header from './Header'
import Profile from '../Components/profiles'
import AboutMe from '../Components/aboutMe'
import Navbar from '../Components/Navbar/Navbar'
import '../css/styles.css'
import '../Components/Navbar/Navbar.css'


const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <Component {...pageProps} />
            <Profile />
            <AboutMe />
        </div>
    )
}

export default MyApp