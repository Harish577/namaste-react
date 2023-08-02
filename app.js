/* ReactElement is object*/

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am Java Script Expert :)"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am H3 Tag"),
    React.createElement("h6", {}, "I am H4 Tag"),
  ]),
]);

console.log(parent);

//JSX

//CROSS ORIGIN

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React"
);
const root = ReactDOM.createRoot(document.getElementById("hello"));
root.render(parent);
