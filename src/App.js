import React, { useState } from "react";
import "./index.css";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [resultCity, setResultCity] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setResultCity(response.data.name);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4770548bed49c5d96b7201c497695887&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div>
        <Weather
          city={resultCity}
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      </div>
    </div>
  );
}
