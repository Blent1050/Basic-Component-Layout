import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const HarryProfile = {
  name: "Harry Potter",
  identity: "The Chosen One",
  age: 11,
  bestFriend: "Ron Weasley and Hermione Granger"
};

const RonProfile = {
  name: "Ron Weasley",
  identity: "Youngest Weasley brother, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Hermione Granger"
};

const HermioneProfile = {
  name: "Hermione Granger",
  identity: "Smarty McSmart pants, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Ron Weasley"
};

function App() {
  return (
    <div className="App">
      <StudentProfile name={HarryProfile.name} />
      <StudentProfile name={RonProfile.name} />
      <StudentProfile name={HermioneProfile.name} />
    </div>
  );
}

function StudentProfile(props) {
  return (
    <div>
      <img src="" alt="" />
      <h1>My name is {props.name}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
