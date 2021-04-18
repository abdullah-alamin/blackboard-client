import React from 'react'

function Newletter() {
    return (
        <section className="newsletter my-5 py-5">
            <h1 className="text-center pb-4">
                Get Course Updates
            </h1>
            <div className="newletter-form container">
                <input className="nl-email" type="text" placeholder="Enter your email..."/>
                <input className="my-btn" type="submit"/>
            </div>
        </section>
    )
}

export default Newletter
