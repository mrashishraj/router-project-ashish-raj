import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter
} from "react-router-dom"
import AppContextProvider from '../../router-project-ashish-raj/src/Router-II/AppContext/AppContextProvider';
// import AppContextProvider from './Router-III/ContextProvider/AppContextProvider';



ReactDOM.render( <
  BrowserRouter >
  <
  AppContextProvider >
  <
  App / >
  <
  /AppContextProvider> < /
  BrowserRouter > ,
  document.getElementById('root')
)
serviceWorker.unregister()