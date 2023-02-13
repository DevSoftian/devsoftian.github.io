import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   increment,
   decrement,
   loadBugs,
   changeBugToBeUpdated,
} from "./redux/bugs";
import { useState, useEffect } from "react";

export default function StoreAccess(props) {
   // const [data, setData] = useState(props.data);

   // useEffect(() => {
   //    setData(props.data);
   // }, [props.data]);
   const { value } = useSelector((state) => state.counter);
   const { bugBeingUpdated } = useSelector((state) => state.counter);
   const dispatch = useDispatch();
   // let bugs = dispatch(loadBugs());
   console.log("StoreAccess bugload", props);
   // console.log("StoreAccess Count", value);

   return (
      <div>
         <h1>Update Bug ID: 0 Count: {value}</h1>
         <button
            onClick={() => {
               console.log("Count before increment", value);
               dispatch(increment());
               console.log("Count after increment", value);
            }}
         >
            Increment Count
         </button>
         <button onClick={() => dispatch(decrement())}>Decrement Count</button>;
      </div>
   );
}
