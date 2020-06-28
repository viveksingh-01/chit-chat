import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';
import { MessagesProvider } from './_contexts/MessagesContext';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Route path="/" exact={true} component={Join} />
          <MessagesProvider>
            <Route path="/chat" component={Chat} />
          </MessagesProvider>
        </div>
      </Router>
    );
  }
}

export default App;
