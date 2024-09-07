export default function WeatherWind({wind=0}){
    return (
        <div className="weather-status-boxes">
            <p>WeatherWind</p>
            <p className="box-content-p"><span className="box-content">{(wind*3.6).toString().substring(0,4)}</span>km/h</p>
        </div>
    )
}