import React from 'react';

import '../styles/NavStyles.css';

class Nav extends React.Component {
    render() {
        return (
          <div className="border">
            <input type="text" className="centered"/>
          </div>  
        );
    }
}

export default Nav;