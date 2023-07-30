import React from 'react'
import './Header.css'
import {FaHome} from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../../configs/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'
//npm install firebase

function Header() {
    //get user data
    const [user] = useAuthState(auth);

    let navigate = useNavigate();

  return (
    <div className="header-container">
        <FaHome onClick={()=>navigate('/')}/>
        {
            user?
            <div>
                <span className="username">
                    {user.displayName}
                </span>
                <button className="auth-link" onClick={()=>signOut(auth)}>Logout</button>
            </div>
            :
            <Link to="/auth" className="auth-link">Sign Up/Log in</Link>
        }
    </div>
  )
}

export default Header