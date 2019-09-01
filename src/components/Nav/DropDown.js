import React from 'react'

import '../../styles/DropDown.css';

class DropDown extends React.Component {
  
  render(){
    return(
      <div class="dropdown dropdown-container">
        <button class="btn border dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
          <span className="float-right"> &#9660; </span>
        </button>
        <div class="dropdown-menu w-100 m-0 p-0" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item border-bottom" href="#">Sample</a>
          <a class="dropdown-item border-bottom " href="#">Sample</a>
          <a class="dropdown-item border-bottom" href="#">Sample</a>
        </div>
      </div>
    )
  }

}

export default DropDown;