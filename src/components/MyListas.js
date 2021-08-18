import React, { useState } from "react";
//importo hooks para usar y manipular el state
import { useSelector, useDispatch } from "react-redux";
//importo las funciones de mi slice
import { counterActions } from "../Slice";

export default function MyListas(props) {
  //para obtener el state y mostrarlo (counterdata lo definí en el store)
  const count = useSelector((state) => state.counterdata.value);
  //para luego utilizar las funciones del slice
  const dispatch = useDispatch();
  return (
    <div>
      <h2>My lists</h2>
      {/* mylista */}
      <div>{count}</div>
      <button onClick={() => dispatch(counterActions.increment())}>
        Increment
      </button>
    </div>
  );
}
