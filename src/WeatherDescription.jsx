
export default function WeatherDescription({description}){
    return (
        <div className="weather-status-boxes">
            <p>Description</p>
            <p className="box-content" style={{fontSize: "1.2rem"}}>{description}</p>
        </div>
    )
}