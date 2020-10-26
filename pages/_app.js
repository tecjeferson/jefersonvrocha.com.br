import React from 'react'
import Header from './Header'
import Profile from '../Components/profiles'
import AboutMe from '../Components/aboutMe'
import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Profile />
            <AboutMe />
        </div>
    )
}

export default MyApp