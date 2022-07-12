import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListLanguageComponent from './components/ListLanguageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateLanguageComponent from './components/CreateLanguageComponent';
import ViewLanguageComponent from './components/ViewLanguageComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListLanguageComponent}></Route>
            <Route path="/languages" component={ListLanguageComponent}></Route>
            <Route path="/add-language/:id" component={CreateLanguageComponent}></Route>
            <Route path="/view-language/:id" component={ViewLanguageComponent}></Route>
            {/* <Route path = "/update-language/:id" component = {UpdateLanguageComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;