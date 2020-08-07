import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import App from "./App";
import counter from "./reducers";
import { Provider } from "react-redux";

const store = createStore(counter);

const root = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
