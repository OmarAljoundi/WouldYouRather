import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";
import persistReducers from "./reducers";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let store = createStore(persistReducers, middleware);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
