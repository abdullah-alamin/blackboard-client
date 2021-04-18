import React from 'react'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'
import About from './About'
import Courses from './Courses'
import Header from './Header'
import Newletter from './Newletter'
import Reviews from './Reviews'

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Courses></Courses>
            <Reviews></Reviews>
            <Newletter></Newletter>
            <Footer></Footer>
        </div>
    )
}

export default Home
