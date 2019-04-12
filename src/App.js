import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import ListContainer from "./components/listContainer/ListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <ListContainer />
      </div>
    );
  }
}

export default App;
