import React from "react";
import "./Icon.css";
import Cloudy from "../../assets/cloudy.png";
import Rain from "../../assets/rain.png";
import Snowing from "../../assets/snowing.png";
import Sun from "../../assets/sun.png";
import Thermometer from "../../assets/thermometer.png";

const Icon = (props) => {
  switch (props.icon) {
    case "Cloudy":
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
      break;
    case "Rain":
      return <img className="icon" src={Rain} alt={Rain} />;
      break;
    case "Snowing":
      return <img className="icon" src={Snowing} alt={Snowing} />;
      break;
    case "Sun":
      return <img className="icon" src={Sun} alt={Sun} />;
      break;
    default:
      return <img className="icon" src={Thermometer} alt={Thermometer} />;
  }
};

export default Icon;
