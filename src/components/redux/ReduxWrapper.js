import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./reducers/appReducer";
import { Helmet } from "react-helmet";

const store = createStore(appReducer);

const Redux = ({ element }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/c556c5e77c.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Provider store={store}>{element}</Provider>
    </>
  );
};

export default Redux;
