import logo from './logo.svg';
import './App.css';

// import {getLatLongOfCityAndWeather} from "./helper/index";
import { useEffect, useState } from 'react';
import WeatherDetails from './components/WeatherDetails';


function App() {
  var api_key = "b65646526636a68703d3aa4e19d4117a";
  

  const [weatherData,setWeatherData] = useState();

  const [city,setCity] = useState('Chennai');

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  let currTimeVar = `${hours}:${minutes}:${seconds}`;

  const getLatLongOfCityAndWeather = async () => {
 
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`;
      
   
    try{
    fetch(url)
       .then(res => res.json())
       .then(data => {
           console.log("lat: " ,data[0].lat);
           console.log("long : ",data[0].lon);
           var lat = data[0].lat;
           var lon = data[0].lon;
           
           var no_days = 8;
   
           var api_key_for_no_days = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=-${lon}&cnt=8&appid=${api_key}`;
           fetch(api_key_for_no_days)
           .then(res => res.json())
           .then(data => {
               console.log("weather_data_for_next_8_days : " ,data.daily);
               
               setWeatherData(data.daily);
           })
           .catch(err=> console.log("error in getting 8 days weather : ",err))
   
   
       })
       .catch(err=> 
           {
           console.log(err);
           alert("Error: " + err);
           }
           );
    }catch(err){
       console.log(err);
    }
   }
   
  useEffect(()=>{
    getLatLongOfCityAndWeather();
      
  },[weatherData,city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  }
  
  return (
     weatherData ? (
      <div className="App">
            <div class="d-flex justify-content-center py-5">
              <select class="dropdown" id="dropdown_locations" onChange={handleChange}>
                <option class="dropdown-item">Chennai</option>
                <option class="dropdown-item">Coimbatore</option>
                <option class="dropdown-item">Erode</option>
                <option class="dropdown-item" >Mumbai</option>
                    <option class="dropdown-item">Delhi</option>
                    <option class="dropdown-item">Manipur</option>

                    <option class="dropdown-item">Karur</option>
                    <option class="dropdown-item">Madurai</option>
                    <option class="dropdown-item">Namakkal</option>
                    <option class="dropdown-item">Trichy</option>
              </select>
            </div>
      <WeatherDetails
     city={city}
     currTime={currTimeVar}
     weatherDescription={weatherData[0]?.weather[0].main}
     weatherSubDesc={weatherData[0]?.weather[0].description}
     windSpeed={`${weatherData[0].wind_speed}km/hr`}
     humidity={`Humidity ${weatherData[0].humidity}%`}
     temperature={`feels like ${Math.round(weatherData[0]?.feels_like.day - 273) }°C`}
     weatherImage={`https://openweathermap.org/img/wn/${weatherData[0]?.weather[0].icon}@2x.png`}
   />
 </div>
     ):(
      <div>Loading...</div>
     )
  );
}

export default App;
