import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path="/" element={ListLanguageComponent}></Route>
            <Route path="/languages" element={ListLanguageComponent}></Route>
            <Route path="/add-language/:id" element={CreateLanguageComponent}></Route>
            <Route path="/view-language/:id" element={ViewLanguageComponent}></Route>
            {/* <Route path = "/update-language/:id" element = {UpdateLanguageComponent}></Route> */}
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;