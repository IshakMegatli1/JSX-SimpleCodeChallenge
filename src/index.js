//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>This is a H1 heading</h1>
    <ul>
      <li>list element 1</li>
      <li>list element 2</li>
      <li>list element 3</li>
    </ul>
  </div>,

  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
