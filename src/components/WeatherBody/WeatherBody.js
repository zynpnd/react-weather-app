import "./WeatherBody.css";

import Days from "../Days/Days";

import Icon from "../Icon/Icon";
import Temp from "../Temp/Temp";

const WeatherBody = (props) => {
  return (
    <div className="WeatherBody card">
      <Days day={props.day} />
      <Icon icon={props.icon} />
      <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} />
    </div>
  );
};

export default WeatherBody;
