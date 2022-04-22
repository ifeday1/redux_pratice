import React from "react";
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from './actions'

function App() {
  const counter= useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="bd">
      <h1>Counter {counter}</h1>
      <div className="btn">
      <button className="btn1" onClick={() => dispatch(increment())}>+</button>
      <button className="btn2" onClick={() => dispatch(decrement())}>-</button>
      </div>
     
      {isLogged ? <h3>Valuable information</h3>: ""}
      
    </div>
  );
}

export default App;
