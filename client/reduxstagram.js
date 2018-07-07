import React from "react";
import { render } from "react-dom";
import Routes from "./components/common/Routes";
import { Provider } from "react-redux";
import store, { history } from "./store/store";
import css from "./styles/style.styl";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
