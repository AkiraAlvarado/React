import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Details from "./Details";
import Actually from "./Actually";


const Principal = ({city}) => {

   const apiKey = "088eee181164c5751c6967dbabfb2029"
   const API_URL = import.meta.env.VITE_API_WHEATHER_URL_PRONOSTIC_1DAY


   const [weather, setWeather] = useState()

   useEffect(() => {
      if (city) { // Solo realiza la solicitud si city no está vacío
         axios.get(`${API_URL}${city}&appid=${apiKey}`)
            .then((datos) => {
               setWeather(datos.data); // El resultado de la API lo guardamos en el estado
               console.log(datos.data);
            })
            .catch(() => {
               setWeather(null); // En caso de error, aseguramos que `weather` sea null
               alert("Ingrese ciudad válida"); // Muestra el alert solo si hay un error
            });
      } else {
         setWeather(null); // Resetea el estado si city está vacío
      }
   }, [city]);

   
   //  const {
   //       name,
   //       visibility,
   //       dt,
   //       clouds: { all },
   //       wind: { speed },
   //       main: { temp, humidity, pressure },
   //       weather: [{
   //         icon, description
   //       }]
   //      } = weather
    
   return(
      <section className="l-container secction__separator main-wheater">
         <h2>Clima actual</h2>
         <div className="weather-container">
            <Actually weather={weather ? weather : undefined}/>
               
            <Details
               humedad={weather ? weather.main.humidity : undefined}
               presion={weather ? weather.main.pressure : undefined}
               velocidad={weather ? weather.wind.speed : undefined}
               nubosidad={weather ? weather.clouds.all : undefined}
               visibilidad={weather ? (weather.visibility / 1000).toFixed(1) : undefined} // Visibilidad en km
            />
         </div>
      </section>
   )
}

export default Principal;


   