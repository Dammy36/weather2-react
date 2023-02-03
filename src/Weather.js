import React from "react"
import axios from "axios";

export default function Weather(props) {

    function handleSubmit (response) {
        console.log(response.data)
    alert(`The weather in ${response.data.city} is ${response.data.temperature.current}`)

  }
    let apiKey = "ft2ff28777530dba3dddb311o0464bef";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);
  
    

    return (
    <div></div>
        
    )
}