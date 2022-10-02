/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/index";

function CakeContainer() {
  const dispatch = useDispatch();

  dispatch(buyCake());

  useSelector((state) => {
    console.log(state.numOfCakes);
  });
  return <div>numOfCakes are :</div>;
}

export default CakeContainer;
