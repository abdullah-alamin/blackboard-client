import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <section className="footer pt-5 pb-3">
            <div className="footer-row container">
                <div>
                    <h4 style={{color: "black"}}>BlackBoard</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsa officia veritatis a. Tempore veritatis vel suscipit tempora facilis assumenda.</p>
                </div>
                <div>
                <h4 style={{color: "black"}}>Address</h4>
                    <p>42/a, Kolatoli, Jatrabari</p>
                    <p>Phone: 01981726534</p>
                    <p>Email: blackboard@gmail.com</p>
                </div>
                <div style={{borderRight: 'none'}}>
                <h4 style={{color: "black"}}>Watch us on social media</h4>
                <p className="p-fa pt-4">
                  <span><FontAwesomeIcon icon={faFacebook}/></span>  
                  <span><FontAwesomeIcon icon={faTwitter}/></span>  
                  <span><FontAwesomeIcon icon={faYoutube}/></span>  
                </p>
                </div>
            </div>
            <p className="copyright pt-3"><small>All rights reserved by Abdullah</small></p>
        </section>
    )
}

export default Footer
