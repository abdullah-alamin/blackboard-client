import React from 'react'
import about from '../../images/about-us.jpg'
function About() {
    return (
        <section className="about-us pb-5">
            <h1 className="text-center py-5">Curious About BlackBoard</h1>
            <div className="container about-row">
                <div>
                    <img src={about} alt="" className="img-fluid"/>
                </div>
                <div className=" my-large">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis itaque corrupti iusto molestiae minima similique id atque dolore necessitatibus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis itaque corrupti iusto molestiae minima similique id atque dolore necessitatibus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis excepturi deserunt adipisci numquam similique.</p>
                </div>
            </div>
        </section>
    )
}

export default About
