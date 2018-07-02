import React, { Component } from "react";
import axios from "axios";

const { REACT_APP_WEATHER_KEY } = process.env;
const vancouverUrl = `https://api.openweathermap.org/data/2.5/forecast?id=6173331&APPID=${REACT_APP_WEATHER_KEY}&units=metric`;

class VancouverWeather extends Component {
  constructor() {
    super();

    this.state = {
      temp: "",
      outside: ""
    };
  }

  componentDidMount() {
    axios.get(vancouverUrl).then(res => {
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
        <h3>Vancouver Weather: {this.state.temp} 'C</h3>
        <h4>Typical Weather - {this.state.outside}</h4>
      </div>
    );
  }
}

export default VancouverWeather;
