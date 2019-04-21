import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider }  from "react-redux";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducer/pipedriveApp";
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";

const store = createStore(
    appReducer, applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
