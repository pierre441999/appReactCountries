import React, {useState} from "react";

import axios from "axios";

function Temperature({cityProps}) {
  
    const [temperature, setTemperature] = useState("");
    const [condition, setCondition] = useState("");
    const [localtime, setLocaltime] = useState("");
    const [icon, setIcon] = useState("");
console.log({cityProps})
  const getWeatherData = ({cityProps}) => {
    axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/current.json?key=a8660573d5c14568bb9164457211712&q=${cityProps}`,
    })
      .then((response) => {
        setTemperature(response.data.current.temp_c);
        setCondition(response.data.current.condition.text)
        setIcon(response.data.current.condition.icon);
        setLocaltime(response.data.location.localtime)
        
      })
      .catch((error) => {
        console.log(error);
      });
    return (
        
        <div>
        <p>{localtime}</p>
        <p>{temperature}°C</p>
        <p>{condition}<img alt="icon" src={icon.replace('//','https://')} /></p>
        </div>
    )
  };

  return (
    <div>

        {getWeatherData({cityProps})}
        
        
    </div>

  );
}


export default Temperature;