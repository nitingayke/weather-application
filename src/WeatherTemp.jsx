import "./WeatherTemp.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

export default function WeatherTemp({city, temprature, humidity}){
    return (
        <div className="WeatherTemp">
            <h2>Today's Temperature: <span className="weather-city-name">{city}</span></h2>
            <div className="temperature-box">
                <p>{temprature}&deg;C</p>
                
                {temprature > 30 ? <LightModeIcon sx={{ fontSize: "8rem", color: "gold", filter: "drop-shadow(2px 4px 6px black)"}}/> : (humidity > 80) ? <ThunderstormIcon sx={{ fontSize: "8rem", color: "gray", filter: "drop-shadow(2px 4px 6px black)"}}/> : <WbCloudyIcon sx={{ fontSize: "8rem", color: "lightblue", filter: "drop-shadow(2px 4px 6px black)"}}/>}
            </div>
        </div>
    )
}