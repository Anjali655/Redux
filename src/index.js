import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import rootReducers from './Services/Reducers/reducer';
const store = configureStore({reducer: rootReducers});
console.log(store,"store")
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


