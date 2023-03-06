import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=4770548bed49c5d96b7201c497695887&units=metric`;
  axios.get(url).then(handleResponse);

  return <h1>Hello from Weather</h1>;
}
