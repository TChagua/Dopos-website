import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../src/Components/Header';
import Section1 from '../src/Components/Section1';
import Section2 from '../src/Components/Section2';
import Section3 from '../src/Components/Section3';
import Section4 from '../src/Components/Section4';
import Footer from '../src/Components/Footer';

class App extends Component {
  
  render() {
    
    return (
      <Router>
        <div className="App">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
      </Router>

    );
  }
}

export default App;
