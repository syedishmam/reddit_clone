import React from 'react';

import '../../styles/SearchBar.css';

class SearchBar extends React.Component {
    handleKeyDown(e) {
        if(e.key === 'Enter') {
            console.log('Entered');
        }
    }

    render() {
        return (
          <div className="search-bar-container">
            <input onKeyDown={this.handleKeyDown} type="text" className="search-bar my-1"/>
          </div>  
        );
    }
}

export default SearchBar;