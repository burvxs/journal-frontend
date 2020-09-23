import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    const logout = () => {
        localStorage.setItem('jwt', "null");
    }
    
    return (
        <nav>
            <Link to="/D2D">
                D2D Tasks
            </Link>
            <Link onClick={logout}>
                Logout
            </Link>
        </nav>
    );
}

export default NavBar;
