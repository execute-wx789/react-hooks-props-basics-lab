import React from "react";
import Links from "./Links"

function About(prop) {
  function checkBio(){
    console.log(prop.bio)
    if(prop.bio === ""){
      return
    } else if(prop.bio === undefined){
      return
    } else {return <p>{prop.bio}</p>}
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={prop.github} linkedin={prop.linkedin}/>
    </div>
  );
}

export default About;
