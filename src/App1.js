import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" component={ListEmployeeComponent}/>
              <Route path="/employees" component={ListEmployeeComponent}/>
            </Switch>
          </div>

          <FooterComponent />
        </div>
      </Router>
    </div>

  );
}

export default App;
