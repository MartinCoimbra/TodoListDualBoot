import "./Todolist.css";
import React, { useState, useEffect } from "react";
import { Item } from "./item";
import { Link } from "react-router-dom";

function Todolist() {
  const [tarea, setTarea] = useState([""]);
  const [tareasPendientes, setTareasPendientes] = useState([]);

  const borrarIDElement = (idelement) => {
    let newArray = [];
    tareasPendientes.filter(function (element, i) {
      if (i != idelement) {
        newArray.push(element);
      }
    });
    setTareasPendientes(newArray);
  };

  const agregarTarea = (e) => {
    e.preventDefault();
    if (tarea != "") {
      setTareasPendientes([tarea, ...tareasPendientes]);
      setTarea([""]);
    }
  };
  return (
    <div className="todolist">
      <h1>Todo List by Martin Coimbra</h1>
      <form onSubmit={agregarTarea}>
        <div>
          <input
            type="text"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          ></input>
          <div>
            <button className="btnAd" type="submit">
              Add
            </button>
            <Link to="listas">
              <button>Save</button>
            </Link>
          </div>
        </div>
      </form>
      {/* Tareas */}
      <div>
        {tareasPendientes.map((element, i) => {
          return (
            <Item
              key={i}
              tareasPendientes={element}
              idBorrar={i}
              borrarIDElement={borrarIDElement}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
