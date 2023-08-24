import React from "react";

function Home(prop) {
  return (
    <div id="home">
      <h1 style={{ color: prop.color }}>
        {prop.name} is a Web Developer from {prop.city}
      </h1>
    </div>
  );
}

export default Home;
