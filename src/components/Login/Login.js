import React, { useContext } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig);

function Login() {
    const {userToken,setUserToken}= useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const handleSignIn= ()=> {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const token = user.za;
            sessionStorage.setItem('token',token);
            setUserToken(token);
            history.replace(from);
            // ...
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });

    }
    return (
        <div className="text-center login-page">
           <h1 className="my-green">BlackBoard</h1>
           <h5 className="pt-4 pb-3 my-green">Login with your Google account</h5>
           <div className="login-box">
               <p onClick={handleSignIn}>G</p>
           </div> 
        </div>
    )
}

export default Login
