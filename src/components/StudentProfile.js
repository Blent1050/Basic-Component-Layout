import React from "react";
import studentProfile from "./studentProfile.css";

function StudentProfile(props) {
  return (
    <div className="student-card">
      <img className="left" src={props.student.image} alt="" />
      <div className="right">
        <h1>{props.student.name}</h1>
        <p>Age: {props.student.age}</p>
        <p>Identity: {props.student.identity}</p>
        <p>Best Friend: {props.student.bestFriend}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
