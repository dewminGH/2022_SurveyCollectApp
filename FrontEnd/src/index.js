import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware , createStore , compose }from "redux";
import thunk from "redux-thunk";

import 'materialize-css/dist/css/materialize.min.css';

import App from "./components/App";
import reducers from "./reducers";
import axios from "axios";
window.axios=axios;

const COMPOSE_ENHANCERS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDom.render(
<Provider store={createStore(reducers , COMPOSE_ENHANCERS(applyMiddleware (thunk) ))}>
    <App/>
</Provider>
,
document.querySelector('#root')
)

