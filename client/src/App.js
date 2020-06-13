import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './Join/Join';
import Chat from './Chat/Chat';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact={true} component={Join} />
          <Route path="/chat" component={Chat} />
        </div>
      </Router>
    );
  }
}

export default App;
