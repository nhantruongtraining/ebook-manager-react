import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListLanguageComponent from './components/languages/ListLanguageComponent';
import HeaderComponent from './components/homepage/HeaderComponent';
import FooterComponent from './components/homepage/FooterComponent';
import CreateLanguageComponent from './components/languages/CreateLanguageComponent';
// import UpdateLanguageComponent from '.components/UpdateLanguageComponent';
import ViewLanguageComponent from './components/languages/ViewLanguageComponent';
import NotFound from './components/NotFound';

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
            <Route path="*" component={NotFound}></Route>
            {/* <Route path = "/update-language/:id" component = {UpdateLanguageComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;