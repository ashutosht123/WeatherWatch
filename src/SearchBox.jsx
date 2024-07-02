import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateinfo}){
    let [city,setcity]=useState("")
    let sethandlecity=(event)=>{
        setcity(event.target.value)
    }
    const API_URL="http://api.openweathermap.org/data/2.5/weather"
    const API_KEY="4551322b488b5205a2de40fce2dae865"
    
  
    let getweatherdata= async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonresponse=await response.json()
        console.log(jsonresponse)
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        }
        console.log(result)
        return result
    }
    
    let handlesubmit= async(event)=>{
        event.preventDefault()
        console.log(city)
        setcity("")
        let newinfo=await getweatherdata()
        updateinfo(newinfo)
    }
    return(
        <div>

            <h1>Search for weather</h1>
            <form onSubmit={handlesubmit}>
            <TextField onChange={sethandlecity} value={city} id="city" label="City name" variant="outlined" required/><br /><br />
            <Button type='submit' variant="contained">Search </Button>
            </form>
        </div>
    )
}