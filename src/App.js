import React, { Component } from 'react';
import './styles/App.css';
import { 
  BrowserRouter,
  Route  } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import ListContainer from "./components/listContainer/ListContainer";
import CreatePerson from './components/createPerson/CreatePerson';

class App extends Component {

  state = {
    people:""
  }

  componentDidMount() {

    fetch("https://rodolfocompany-860a35.pipedrive.com/v1/persons?api_token=479f2bc15058867bb7dcfdaade60fe25d27c55f4")
    .then(response => response.json())
    .then( data => {
      this.setState({
        people: data.data
      }) 
    })

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <Route exact path="/" render= { () => <ListContainer people={this.state.people} /> } />
          <Route path="/newPerson" component={ CreatePerson }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
