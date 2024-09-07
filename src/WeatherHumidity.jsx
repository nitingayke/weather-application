export default function Weatherhumidity({humidity}){
    return (
        <div className="weather-status-boxes">
            <p>humidity</p>
            <span className="box-content">{humidity}%</span>
        </div>
    )
}