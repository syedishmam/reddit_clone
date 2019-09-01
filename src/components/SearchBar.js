import React from 'react';

import '../styles/SearchBarStyles.css';

class SearchBar extends React.Component {
    render() {
        return (
          <div className="border">
            <input type="text" className="centered"/>
          </div>  
        );
    }
}

export default SearchBar;