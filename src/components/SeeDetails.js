import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./MyLists.css";

export default function SeeDetails(props) {
  const myLists = useSelector((state) => state.counterLists.myList);
  let { id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("https://www.therogerlab.com/examples/lists-stats.php")
      .then((resp) => resp.json())
      .then((result) =>
        setInfo({
          total: result.total,
          done: result.done,
          delayed: result.delayed,
        })
      )
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      SeeDetails!
      <Link to="/listas">Go back</Link>
      <h1>
        {"Total:" +
          info.total +
          " - DONE:" +
          info.done +
          " - DELAYED:" +
          info.delayed}
      </h1>
      <div className="grup">
        {myLists[id].map((element, i) => {
          return <p key={i}>{element}</p>;
        })}
      </div>
    </div>
  );
}
