import "./Todolist.css";
import React, { useState, useEffect } from "react";
import { List } from "./item";

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
      <h1>Todo List by Martin Coimbra</h1>git remote -v
      <form onSubmit={agregarTarea}>
        <div>
          <input
            type="text"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          ></input>
          <button>Add</button>
        </div>
      </form>
      {/* Tareas */}
      <div>
        {tareasPendientes.map((element, i) => {
          return (
            <List
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
