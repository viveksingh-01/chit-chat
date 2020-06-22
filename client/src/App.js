import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container my-5">
          <Route path="/" exact={true} component={Join} />
          <Route path="/chat" component={Chat} />
        </div>
      </Router>
    );
  }
}

export default App;
