import React from "react";

export default function Weather(props) {
  if (props.temperature) {
    return (
      <ul>
        <li>
          {" "}
          The temperature in {props.city} is {Math.round(props.temperature)}°C.
        </li>
        <li>
          {" "}
          The Weather Description in {props.city} is {props.description}.
        </li>
        <li>
          {" "}
          The humidity in {props.city} is {props.humidity}%.
        </li>
        <li>
          {" "}
          The wind in {props.city} is {props.wind}km/hr.
        </li>
        <li>
          {" "}
          The weather Icon in {props.city} is
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt={props.description}
          />
        </li>
      </ul>
    );
  } else {
    return <p>Loading.....</p>;
  }
}
