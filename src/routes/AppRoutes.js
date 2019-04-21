import React from "react";
import { 
    Route,
    Switch,
    Redirect } from "react-router-dom";
import ListContainer from "../components/listContainer/ListContainer";
import CreatePerson from "../components/createPerson/CreatePerson";
import NotFound from "../components/notFound/NotFound";

const AppRoutes = () => {
    return(
        <Switch>
            <Route exact path="/" render= { () => <ListContainer /> } />
            <Route path="/newPerson" component={ CreatePerson }/>
            <Route path="/notfound" component={ NotFound }/>
            <Route render={ () => <Redirect to="/notfound" /> }/>
          </Switch>
    )
}

export default AppRoutes;