import React, {useState} from "react";
import axios from "axios";

function WeatherProps({cityprops}) {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [temperature, setTemperature] = useState("");

console.log({cityprops})
  const getWeatherData = (city) => {
    axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/current.json?key=a8660573d5c14568bb9164457211712&q=${city}`,
    })
      .then((response) => {
        setTemperature(response.data.current.temp_c);
      })
      .catch((error) => {
        console.log(error);
      });
    return (
        
        <div>
        <p>Salut ca merche</p>
        <p>{city}</p>
        <p>{temperature}</p>
        </div>

    )
  };

  return (
    <div>
        {getWeatherData({cityprops})}
        <p>hello</p>
        <p>{cityprops}</p>
    </div>

  );
    
}


export default WeatherProps;