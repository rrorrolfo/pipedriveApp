import React, { Component } from 'react';
import './styles/App.css';
import { 
  BrowserRouter,
  Route  } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import ListContainer from "./components/listContainer/ListContainer";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <Route exact path="/" render= { () => <ListContainer /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
