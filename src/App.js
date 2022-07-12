import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListLanguageComponent from './components/ListLanguageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateLanguageComponent from './components/CreateLanguageComponent';
// import UpdateLanguageComponent from '.components/UpdateLanguageComponent';
import ViewLanguageComponent from './components/ViewLanguageComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListLanguageComponent />} />
            <Route path="/languages" element={<ListLanguageComponent />} />
            <Route path="/add-language/:id" element={<CreateLanguageComponent />} />
            <Route path="/view-language/:id" element={<ViewLanguageComponent />} />
            {/* <Route path = "/update-language/:id" component = {UpdateLanguageComponent}></Route> */}
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;

{/* <Switch>
            <Route path="/" exact component={ListLanguageComponent}></Route>
            <Route path="/languages" component={ListLanguageComponent}></Route>
            <Route path="/add-language/:id" component={CreateLanguageComponent}></Route>
            <Route path="/view-language/:id" component={ViewLanguageComponent}></Route>
            {/* <Route path = "/update-language/:id" component = {UpdateLanguageComponent}></Route> */}
          // </Switch > * /}