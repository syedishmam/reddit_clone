import React from 'react';

import SearchBar from './SearchBar';

class Nav extends React.Component {
    render() {
        return (
          <div className="border">
            <SearchBar />
          </div>  
        );
    }
}

export default Nav;