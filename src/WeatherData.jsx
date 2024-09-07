import WeatherAirPress from "./WeatherAirPress"
import "./WeatherData.css"
import WeatherDescription from "./WeatherDescription"
import WeatherFeelLike from "./WeatherFeelLike"
import Weatherhumidity from "./Weatherhumidity"
import WeatherTemp from "./WeatherTemp"
import WeatherWind from "./WeatherWind"

export default function WeatherData({ weatherData }) {

    function convertToIST(unixTimestamp) {
        // Convert Unix timestamp to milliseconds and adjust for IST (UTC + 5:30)
        const date = new Date((unixTimestamp + 19800) * 1000);

        // Extract hours and minutes
        let hours = date.getHours();
        const minutes = date.getMinutes();

        // Determine AM/PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour format to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // If hour is 0, set it to 12

        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${formattedMinutes} ${ampm}`;
    }
    
    return (
        <div className="weather-data">
            <WeatherTemp city={weatherData.city} temprature={weatherData.temprature} humidity={weatherData.humidity} />
            <div className="weather-status-box">
                <WeatherAirPress airpress={weatherData.wind} />
                <Weatherhumidity humidity={weatherData.humidity} />
                <WeatherDescription description={weatherData.description} />
                <WeatherFeelLike feelLike={weatherData.feels_like} />
                <WeatherWind wind={weatherData.wind} />

            </div>
            <p>Sunrise: {convertToIST(weatherData.sunrise)}, Sunset: {convertToIST(weatherData.sunset)}</p>
        </div>
    )
}