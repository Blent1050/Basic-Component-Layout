import React from "react";
import ReactDOM from "react-dom";

import StudentProfile from "./components/StudentProfile";
import "./styles.css";

const HarryProfile = {
  name: "Harry Potter",
  identity: "The Chosen One",
  age: 11,
  bestFriend: "Ron Weasley and Hermione Granger",
  image:
    "https://images.immediate.co.uk/volatile/sites/3/2019/01/harry-potter-disgust-02a1f19.jpeg?quality=90&resize=620,413"
};

const RonProfile = {
  name: "Ron Weasley",
  identity: "Youngest Weasley brother, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Hermione Granger",
  image: "https://i.ytimg.com/vi/ffcuQ5hluzA/maxresdefault.jpg"
};

const HermioneProfile = {
  name: "Hermione Granger",
  identity: "Smarty McSmart pants, Harry's best friend",
  age: 11,
  bestFriend: "Harry Potter and Ron Weasley",
  image:
    "https://i2-prod.mirror.co.uk/incoming/article6301350.ece/ALTERNATES/s615/Harry-Potter.jpg"
};

function App() {
  return (
    <div className="App">
      <StudentProfile student={HarryProfile} />
      <StudentProfile student={RonProfile} />
      <StudentProfile student={HermioneProfile} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
