import React from 'react';

import '../styles/SearchBarStyles.css';

class SearchBar extends React.Component {
    handleKeyDown(e) {
        if(e.key === 'Enter') {
            console.log('Entered');
        }
    }

    render() {
        return (
          <div className="border">
            <input onKeyDown={this.handleKeyDown} type="text" className="search-bar my-1"/>
          </div>  
        );
    }
}

export default SearchBar;