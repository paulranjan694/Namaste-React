import React from 'react';
import ReactDOM from "react-dom/client";

/**
 * ###1. Nested elements
 * ======================
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">Hello World from React!!</h1>
 *      </div>
 * <div>
 */

/*const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello World from React!!")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

/**
 * ###2. Multiple elements
 * ========================
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading1">Heading 1</h1>
 *          <h1 id="heading2">Heading 2</h1>
 *      </div>
 * <div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Heading 1"),
    React.createElement("h2", { id: "heading2" }, "Heading 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
