import React from 'react';

import SearchBar from './SearchBar';
import DropDown from './DropDown';
import '../../styles/NavContainer.css';

class Nav extends React.Component {
    render() {
        return (
          <div className="nav-container border d-flex flex-row">
            <DropDown />
            <SearchBar />
          </div>  
        );
    }
}

export default Nav;