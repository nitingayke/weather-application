import './App.css'
import WeatherBox from './WeatherBox'
import WeatherHeadline from './weatherHeadline'

function App() {

  return (
    <div className='weather-box'>
        <WeatherHeadline/>
        <WeatherBox/>
    </div>
  )
}

export default App
