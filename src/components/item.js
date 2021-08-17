import React, { useState } from "react";
import PropTypes from "prop-types";

export function List(props) {  
  return (
    <div className="tarea">
      <p>{props.tareasPendientes}</p>
      <button onClick={() => props.borrarIDElement(props.idBorrar)}> X </button>
    </div>
  );
}
List.propTypes = {
  tareasPendientes: PropTypes.string,
  idBorrar: PropTypes.number,
  borrarIDElement: PropTypes.func,
};
