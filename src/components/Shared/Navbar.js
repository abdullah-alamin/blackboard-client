import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

function Navbar() {
    const {userToken}= useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link className="navbar-brand" to="/">BlackBoard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto my-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>   
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>  
                    {
                        !userToken?
                    <li className="nav-item">
                    <Link className="btn btn-primary login-btn px-3" to="/login">Login</Link>
                    </li>    :
                    <p className='pt-2 d-none d-md-block my-green'>Welcome</p>
                    }  
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
