import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeRouteContainerComponent from './routes/Home';
import UsersRouteContainerComponent from './routes/Users/Users';
import AboutRouteContainerComponent from './routes/About';


export default function App() {

  return (
    // <App>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutRouteContainerComponent />
          </Route>
          <Route path="/users">
            <UsersRouteContainerComponent />
          </Route>
          <Route path="/">
            <HomeRouteContainerComponent />
          </Route>
        </Switch>
      </div>
    </Router>
    // </App>
  );
}




