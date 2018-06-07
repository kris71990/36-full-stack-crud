import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../auth-landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Header from '../header/header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/signup" component={Landing}/>
            <Route exact path="/login" component={Landing}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
