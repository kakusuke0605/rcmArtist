import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/index";
import { SpotifyApiContext } from 'react-spotify-api';
import { spotifyApiAccessToken } from './config/spotify';

const store = createStore(rootReducer);

ReactDOM.render(
  <SpotifyApiContext.Provider value={spotifyApiAccessToken}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </SpotifyApiContext.Provider>,
  document.getElementById('root')
);


reportWebVitals();
