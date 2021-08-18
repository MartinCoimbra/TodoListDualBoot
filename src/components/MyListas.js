import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MyLists.css";

export default function MyListas(props) {
  const myLists = useSelector((state) => state.counterLists.myList); 
  return (
    <div>
      <h2>My lists</h2>
      <Link to="todo">Add new todoList</Link>
      {/* {console.log(myLists)} */}
        {myLists.map((element, i) => {
          console.log(element[i]);
        return (
          <div key={element} className="grup">
            {element.map(element2=> { 
              return (<p>{element2}</p>)
            })}
            <Link to={"SeeDetails/" + i}>
              See details
            </Link>
          </div>
        );
      })}  
    </div>
  );
}
