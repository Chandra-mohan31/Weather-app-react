var api_key = "b65646526636a68703d3aa4e19d4117a";




export const getLatLongOfCityAndWeather = async (city) => {
 
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
            
            return data;
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

