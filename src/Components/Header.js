import React from "react";
import DallasWeather from "./DallasWeather";

function Header() {
  return (
    <div style={{ width: "100%" }}>
      <header className="App-header">
        <h1 className="App-title" role="img">
          {" "}
          😃 News 📰 Break 😃
        </h1>
        <DallasWeather />
      </header>
    </div>
  );
}

export default Header;
