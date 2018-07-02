import React, { Component } from "react";
//import { WEATHER_KEY } from "../../";
import axios from "axios";

const { REACT_APP_WEATHER_KEY } = process.env;
const dallasUrl = `https://api.openweathermap.org/data/2.5/forecast?id=4853335&APPID=${REACT_APP_WEATHER_KEY}&units=imperial`;

class DallasWeather extends Component {
  constructor() {
    super();

    this.state = {
      temp: "",
      outside: ""
    };
  }

  componentDidMount() {
    axios.get(dallasUrl).then(res => {
      //console.log(res.data.list[0].weather[0].description);
      this.setState({
        temp: res.data.list[0].main.temp,
        outside: res.data.list[0].weather[0].description
      });
    });
  }

  render() {
    //console.log(process.env.REACT_WEATHER_KEY);
    //console.log(this.state);
    return (
      <div>
        <h3>Dallas Weather: {this.state.temp} F</h3>
        <h4>Outside {this.state.outside}</h4>
      </div>
    );
  }
}

export default DallasWeather;
//API call City ID listed below
// {
//     "id": 6173331,
//     "name": "Vancouver",
//     "country": "CA",
//     "coord": {
//       "lon": -123.119339,
//       "lat": 49.24966
//     }

// Dallas
// {
//     "id": 4853335,
//     "name": "Dallas County",
//     "country": "US",
//     "coord": {
//       "lon": -94.050232,
//       "lat": 41.683319
//     }
