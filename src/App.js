import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/navbar'
import MainPage from './components/landing/landing'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
