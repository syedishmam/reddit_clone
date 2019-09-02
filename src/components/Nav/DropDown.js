import React from 'react'

import '../../styles/DropDown.css';

class DropDown extends React.Component {
  
  render(){
    return(
      <div className="dropdown dropdown-container">
        <button className="btn border dropdown-btn m-0 p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Subreddits
          <span className="float-right"> &#9660; </span>
        </button>
        <div className="dropdown-menu w-100 m-0 p-0" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item border-bottom" href="#">Sample</a>
          <a className="dropdown-item border-bottom " href="#">Sample</a>
          <a className="dropdown-item border-bottom" href="#">Sample</a>
        </div>
      </div>
    )
  }

}

export default DropDown;