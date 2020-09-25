import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className ="row">
          <HeaderComponent />
          </div>
          <div className="container" style={{marginTop:"100px"}}>
            <Switch>
              <Route exact path="/" component={ListEmployeeComponent}/>
              <Route path="/employees" component={ListEmployeeComponent}/>
              <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
            </Switch>
          </div>
          <div className="footer">
          <FooterComponent />
          </div>
        </div>
      </Router>
    </div>

  );
}

export default App;
