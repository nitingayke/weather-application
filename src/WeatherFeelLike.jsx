export default function WeatherFeelLike({feelLike}){
    return (
        <div className="weather-status-boxes">
            <p>FeelLike</p>
            <p className="box-content-p"><span className="box-content">{feelLike}</span></p>
        </div>
    )
}