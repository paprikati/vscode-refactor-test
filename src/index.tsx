import React from "react";
import ReactDOM from "react-dom";
import { Test } from "./test";

ReactDOM.render(
  <React.StrictMode>
      <div>
          <Test str="test string" num={5653} bool={true}/>
          </div>
  </React.StrictMode>,
  document.getElementById("root")
);
