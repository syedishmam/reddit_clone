import React from 'react'

import {RedditLogo} from '../../logos';

class Logo extends React.Component{

  render(){
    return(
      <div className="logo-container d-flex flex-row">
        <div className='logo d-flex flex-row'>
          <RedditLogo />
        </div> 
        <div className="ml-2">
          Reddit
        </div>
      </div>
    )
  }
}

export default Logo;