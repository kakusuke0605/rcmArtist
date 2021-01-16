import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import "./index.css";
import { createStore ,applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/index";

// const middleware = window.devToolsExtension
//     ? compose(
//         applyMiddleware(thunk),
//         window.devToolsExtension()
//     )
//     : applyMiddleware(thunk);

// const store = createStore(rootReducer, middleware);
const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
