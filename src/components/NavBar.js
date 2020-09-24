import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    const logout = () => {
        localStorage.setItem('jwt', "null");
    }

    return (
      <nav className="topLevelNav">
        <Link to="/D2D" className="D2DNav">
          D2D Tasks
        </Link>
        <Link onClick={logout} to="" className="logout">
          Logout
        </Link>
        <Link to="/floaters" className="floatingTasksNav">
          Floating Tasks
        </Link>
      </nav>
    );
}

export default NavBar;
