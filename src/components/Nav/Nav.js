import React from 'react';

import SearchBar from './SearchBar';
import DropDown from './DropDown';
import UserActions from './UserActions';
import {RedditLogo} from '../../logos';
import '../../styles/NavContainer.css';

class Nav extends React.Component {
    render() {
        return (
          <div className="nav-container pl-3 pr-3 border d-flex flex-row align-items-center justify-content-around">
            <RedditLogo />
            <SearchBar />
          </div>  
        );
    }
}

export default Nav;