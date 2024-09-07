export default function WeatherAirPress({ airpress }){
    return (
        <div className="weather-status-boxes">
            <p>Air Pressure</p>
            <p className="box-content-p"><span className="box-content">{airpress}</span>mb</p>
        </div>
    )
}