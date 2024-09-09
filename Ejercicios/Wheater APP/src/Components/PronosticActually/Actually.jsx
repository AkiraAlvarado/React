import { kelvinToCelsius } from "../../Helpers/convertir";
import { formatDate } from "../../Helpers/convertir";

const Actually = ({weather}) => {
const LinkImage= "https://openweathermap.org/img/wn/"
 
return (
   <>
   <div className="weather-container__main">
      <div className="weather-container__information">
         <div className="flex2">
            <i className="icon fa-solid fa-temperature-three-quarters"></i>
            <h1>
               {weather ? `${kelvinToCelsius(weather.main.temp)}°C` : "__°C"}
            </h1>
         </div>
         <div className="flex2">
            <i className="icon2 fa-solid fa-location-dot"></i>
            <p>
               {weather ? `${weather.name}` : "S____, ____"}
            </p>
         </div>
         <div className="flex2">
            <i className="icon2 fa-solid fa-calendar"></i>
            <p>
               {weather ? formatDate(weather.dt) : "____ __, _____"}
            </p>
         </div>
         </div>
         <div className="weather-container__result">
            <img className="weather-container__image" alt="" src={weather ? `${LinkImage}${weather.weather[0].icon}@2x.png` : ""}/>
            <p className="weather-container__description"> {weather ?  `${weather.weather[0].description}` : "________"} </p>
         </div>
   </div>
   </>
)

}

export default Actually;