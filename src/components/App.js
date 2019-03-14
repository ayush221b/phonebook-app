// Import React modules
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import the Components for different routes(pages)
import Dashboard from './pages/dashboard/Dashboard';
import Add from './pages/add/Add';
import TopNavbar from "./shared/top_navbar/TopNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar/>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/add' component={Add} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
