import WeatherCityInput from "./WeatherCityInput.jsx";
import WeatherData from "./WeatherData.jsx";

import "./WeatherBox.css";
import { useState } from "react";
export default function WeatherBox(){
    let apiURL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "d093f55a2a8bce909cba176717ebb80a";

    let handleSetWeatherData = async(city) => {
        try {
            let response = await fetch(`${apiURL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JSONresponse = await response.json();

            let result = {
                city: JSONresponse.name,
                temprature: JSONresponse.main.temp,
                humidity: JSONresponse.main.humidity,
                feels_like: JSONresponse.main.feels_like,
                description: JSONresponse.weather[0].description,
                sunrise: JSONresponse.sys.sunrise,
                sunset: JSONresponse.sys.sunset,
                wind: JSONresponse.wind.speed,
            };
            return result;

        } catch (error) {
            throw error;
        }
    }
    let handleSubmit = async (city)=>{
        try {
            let result = await handleSetWeatherData(city)
            setWeaherData(result);
        } catch (error) {
            alert(`An error occurred: ${error.message}`);
        }
    }

    let [weatherData, setWeaherData] = useState(handleSetWeatherData("Nashik"));
    
    return (
        <div className="Weather-Box">
            <WeatherCityInput handleSubmit={handleSubmit}/>
            <WeatherData weatherData={weatherData}/>
        </div>
    )
}