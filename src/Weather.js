import React from "react"
import './App.css';


export default function Weather() {  

    return (
      <small className="hosted">This project was created by Oseyemi Dammy and is {""}
        <a href="https://github.com/Dammy36/weather2-react"  rel="noreferrer" target="_blank">
          Opensourced code on Github </a> 
         {""} and {}      
        <a href="https://inspiring-stroopwafel-6ba231.netlify.app/" rel="noreferrer" target="_blank"> 
           Hosted on Netlify
        </a>
      </small>
        
    )
}