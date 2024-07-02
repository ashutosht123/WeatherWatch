import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherinfo,setweatherinfo]=useState({
    city:"Nanded",
    feelsLike: 24,
    temp: 81,
    tempMax: 26.95,
    tempMin: 26.95,
    humidity: 26.95,
    weather: "overcast clouds",
    })
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo)
    }
    return(
        <>
        <center><h1>Weather App</h1></center>
        <SearchBox updateinfo={updateinfo}/>
        <InfoBox info={weatherinfo}/>
        </>
    )
}