/* ReactElement is object*/

import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object => html render
//JSX => React.creatElement=> object => html render
//JSX is html like or xml like pattern
//JSX transpiled before reaching javascript(parcel)-babel
//const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// Jsx is camel case

//React Element
const jsxheading = <h1 className="head">"Namaste React"</h1>;

//React Component
//Class Based Componet -OLD
//Functional Component - NEW

const Title = () => (
  <div id="titlecontainer">
    {element}
    <h1>Namaste React Title Functional Component</h1>
  </div>
);

const number =100;

const element = <span>React Element</span>

// React Functional Component
//Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
     {Title()}
      <Title></Title>  
      <Title />
      <h1>Namaste React Functional Component<h4 id = "inner">{number}</h4></h1>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
