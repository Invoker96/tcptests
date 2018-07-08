import React from "react";
import { render } from "react-dom";
import Routes from "./components/common/Routes";
import { Provider } from "react-redux";
import store, { history } from "./store/store";
import css from "./styles/style.styl";
import C from "./data/constants"

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById(C.ROOT_ELEMENT)
);
