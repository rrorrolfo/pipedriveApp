import React, { Component } from 'react';
import './styles/App.css';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect  } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import ListContainer from "./components/listContainer/ListContainer";
import CreatePerson from './components/createPerson/CreatePerson';
import NotFound from "./components/notFound/NotFound";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" render= { () => <ListContainer /> } />
            <Route path="/newPerson" component={ CreatePerson }/>
            <Route path="/notfound" component={ NotFound }/>
            <Route render={ () => <Redirect to="/notfound" /> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
