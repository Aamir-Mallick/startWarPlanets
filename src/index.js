import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { getStarWarsReducer } from "./Redux/Reducer/GetStarWarsReducer";
import { planetsDetailsReducer } from "./Redux/Reducer/PlanetsDetailsReducers";
import logger from "redux-logger";
import reportWebVitals from "./reportWebVitals";

const root = combineReducers({
  getStarWarsReducer: getStarWarsReducer,
  planetsDetailsReducer: planetsDetailsReducer,
});

const store = createStore(root, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
