import React from 'react';

import Nav from './Nav/Nav';
import Subreddit from './Subreddit/Subreddit';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Subreddit/>
      </div>
    );
  }
}

export default App;
