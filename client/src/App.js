import React from 'react';
import Join from './Join/Join';
import Chat from './Chat/Chat';

class App extends React.Component {
  render() {
    return (
      <div>
        <Join />
        <Chat />
      </div>
    );
  }
}

export default App;
