/** @format */

import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import CakeContainer from "./component/CakeContainer";

import axios from "axios";

// const instance = Axios.create({
//   baseURL: "http://127.0.0.1:500",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });

axios("/firstItem")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

axios("/firstItem")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  );
}

export default App;
