import React from "react"
import axios from "axios";
import { Audio } from 'react-loader-spinner';
export default function Weather(props) {

    function handleResponse(response) {
        console.log(response.data)
    alert(`The weather in ${response.data.city} is ${response.data.temperature.current}`)

  }
    let apiKey = "ft2ff28777530dba3dddb311o0464bef";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  
    

    return (
        <Audio
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
        
    )
}