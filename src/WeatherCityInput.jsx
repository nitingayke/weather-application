import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import LightModeIcon from '@mui/icons-material/LightMode';

import "./WeatherCityInput.css";
import { useState } from 'react';

export default function WeatherCityInput({handleSubmit}) {
    let [city, setCity] = useState("");

    let handleInput = (event)=>{
        setCity(event.target.value);
    }
    return (
        <div className='Weather-City-Input-Box'>
            <div className='Weather-sun-icon'>
                <LightModeIcon sx={{color: 'gold',fontSize: "5rem"}}/>
            </div>
            <WbCloudyIcon sx={{ fontSize: "12rem", color: "#d5f5ff", filter: "drop-shadow(1px 1px 2px black)"}}/>
            <h1>Enter City Name</h1>
            <TextField fullWidth label="City Name" onChange={handleInput} value={city} id="outlined-size-small fullWidth margin-dence" size="small" />
            <br /><br />
            <Button onClick={() => handleSubmit(city)} variant="outlined" startIcon={<SearchIcon />}>Search</Button>

        </div>
    )
}