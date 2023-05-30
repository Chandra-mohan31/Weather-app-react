import React from 'react';
import "./WeatherDetails.css";


function WeatherDetails({ city, currTime, weatherDescription, weatherSubDesc, windSpeed, humidity, temperature, weatherImage }) {
  return (
    <div className="card" style={{ color: '#4B515D', borderRadius: '35px' }}>
      <div className="card-body p-4">
        
        <div className="d-flex">
          <h6 className="flex-grow-1" id="city">{city}</h6>
          <h6 id="curr_time">{currTime}</h6>
        </div>

        <div className="d-flex flex-column text-center mt-5 mb-4">
          <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }} id="weather_description">{weatherDescription}</h6>
          <span className="small" style={{ color: '#868B94' }} id="weather_sub_desc">{weatherSubDesc}</span>
        </div>

        <div className="d-flex align-items-center">
          <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
            <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1" id="wind_speed">{windSpeed}</span></div>
            <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1" id="humidity">{humidity}</span></div>
            <div><i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1" id="temperature">{temperature}</span></div>
          </div>
          <div>
            <img id="weather_image" src={weatherImage} width="100px" alt="Weather" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherDetails;
