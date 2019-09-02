import React from 'react';
import axios from 'axios';

class Subreddit extends React.Component{

  constructor(props){
    // SEND SUBREDDIT NAME VIA PROPS 
    super(props)
  }

  getAuth(){

    var client_id = 'LV_tpZebIrr2pA' 
    var res_type = 'code'
    var state = 'test'
    var redirect_uri = 'http://www.localhost:3000'
    var duration = 'permanent'
    var scope = 'identity'

    var endpoint = `https://www.reddit.com/api/v1/authorize?client_id=${client_id}&response_type=${res_type}&
    state=${state}&redirect_uri={${redirect_uri}&duration=${duration}&scope=${scope}`

    var ep="https://www.reddit.com/api/v1/access_token"

    axios.post('https://www.reddit.com/api/v1/access_token', {
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000',
      headers: {
        
      }
    }).then(response => {
      console.log(response);
    })
  }

  

  getPost(){
    return(
      <div className='card border border-primary post'>
          
      </div>
    )
  }

  render(){
    return(
      <div>
        {/* COMMUNITY DETAILS */}
        {/* FEED */}
        <button className="ml-5 button" onClick={this.getAuth}> TEST </button>
      </div>

    )
  }
}

export default Subreddit;