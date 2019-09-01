import React from 'react';

import SearchBar from './SearchBar';
import DropDown from './DropDown';
import Logo from './Logo';
import UserActions from './UserActions';
import '../../styles/NavContainer.css';

class Nav extends React.Component {
    render() {
        return (
          <div className="nav-container pl-3 pr-3 border d-flex flex-row align-items-center justify-content-around">
            <Logo />
            <DropDown />
            <SearchBar />
            <UserActions />
          </div>  
        );
    }
}

export default Nav;