import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import AppRoutes from "./routes/AppRoutes";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <AppRoutes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
