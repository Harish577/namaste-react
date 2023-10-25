import React from "react";
import ReactDOM from "react-dom/client";
import "../css/index.css";

const title = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", null, "Title"),
  React.createElement("h2", null, "Namaste JavaScript Assignment3")
);

const TitleComponent = () => {
  return (
    <div id="title">
      <h1 id="h1">Title</h1>
      <h2 id="h2">Namaste JavaScript Assignment3</h2>
      <HeaderComponent/>
      <SearchComponent/>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div id="headerpart">
        <img className="rest-logo" src={require('../images/flag.png')} alt="Sample Image" /> 
    </div>
  );
};

const SearchComponent = () => {

    return (
        <div class="search-container">
        <input type="text" id="search" placeholder="Search Box"></input>
        <button id="search-button">Search</button>
        <div class = "user-icon">
        <p id = "user_icon"> User Icon Text</p>
       </div>

       </div>

      
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponent />);
