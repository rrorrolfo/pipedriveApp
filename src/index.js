import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider }  from "react-redux";
import { createStore } from "redux";
import appReducer from "./reducer/pipedriveApp";
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    appReducer
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
