import React from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Profile from '../Components/Profiles'
import AboutMe from '../Components/AboutMe'
import Navbar from '../Components/Navbar/Navbar'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import '../css/styles.css'



const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <Title />
  
            <Component {...pageProps} />
            <Profile />
            <AboutMe />
            <Form />
            <Footer />
        </div>
    )
}

export default MyApp