const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '781a1898b6mshad98f60ddc8eff9p12842bjsn6a7f1c099d08',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+city+'&days=3', options)
	.then(response => response.json())
	.then(response =>{
	console.log(response);
	cityname.innerHTML=response.location.name;
	temp_c.innerHTML=response.current.temp_c;
	main_temp.innerHTML=response.current.temp_c;
	temp_f.innerHTML=response.current.temp_f;
	maintemp.innerHTML=response.current.temp_c;
	maxtemp_c.innerHTML=response.forecast.forecastday[0].day.maxtemp_c;
	maxtemp_f.innerHTML=response.forecast.forecastday[0].day.maxtemp_f;
	feelslike_c.innerHTML=response.current.feelslike_c;
	feelslike_f.innerHTML=response.current.feelslike_f;
	mintemp_c.innerHTML=response.forecast.forecastday[0].day.mintemp_c;
	mintemp_f.innerHTML=response.forecast.forecastday[0].day.mintemp_f;
	condition.innerHTML=response.current.condition.text;
	if(response.current.is_day==0){
		daynight.innerHTML="Night";
		current_text.innerHTML=response.forecast.forecastday[0].astro.moon_phase;
		weather.innerHTML=response.forecast.forecastday[0].astro.moon_phase;
	}
	else{
		daynight.innerHTML="Day";
		current_text.innerHTML=response.current.condition.text;
		weather.innerHTML=response.current.condition.text;
	}
	uv.innerHTML=response.current.uv;
	mainhumidity.innerHTML=response.current.humidity;
	visibility.innerHTML=response.current.vis_km;
	visible.innerHTML=response.current.vis_miles;
	humidity.innerHTML=response.current.humidity;
	chance_of_rain.innerHTML=response.forecast.forecastday[0].day.daily_chance_of_rain;
	precip_mm.innerHTML=response.current.precip_mm;
	precip_in.innerHTML=response.current.precip_in;
	wind_kphmain.innerHTML=response.current.wind_kph;
	wind_dir.innerHTML=response.current.wind_dir;
	gust_kph.innerHTML=response.current.gust_kph;
	gust_mph.innerHTML=response.current.gust_mph;
	wind_kph.innerHTML=response.current.wind_kph;
	wind_mph.innerHTML=response.current.wind_mph;
	wind_degree.innerHTML=response.current.wind_degree;
	sunrise.innerHTML=response.forecast.forecastday[0].astro.sunrise;
	sunset.innerHTML=response.forecast.forecastday[0].astro.sunset;
})
.catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
	city.focus();
	e.preventDefault();
	getWeather(city.value);
	city.value="";
	city.blur();
})

mumbai.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Mumbai");
})

delhi.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Delhi, India");
})

chennai.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Chennai");
})

bangalore.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Bangalore");
})

pune.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Pune");
})

kolkata.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Kolkata");
})

hyderabad.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Hyderabad");
})

varanasi.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather("Varanasi");
})

getWeather("Delhi, India");