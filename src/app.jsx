import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar/index.jsx";
import SearchResultsList from "./components/SearchResultsList/index.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/index";

const App = () => {
  return (
    <>
      <SearchBar />
      <SearchResultsList />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
