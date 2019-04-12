import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
