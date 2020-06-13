import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Join from './Join/Join';
import Chat from './Chat/Chat';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Join />
        {/* <Chat /> */}
      </div>
    );
  }
}

export default App;
