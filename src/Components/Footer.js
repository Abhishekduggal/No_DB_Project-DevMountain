import React from "react";
import VancouverWeather from "./VancouverWeather";

function Footer() {
  return (
    <footer className="App-footer">
      <p>Created by Abhishek </p>
      <p>Referenced news is from New York Times API</p>
      <VancouverWeather />
    </footer>
  );
}

export default Footer;
