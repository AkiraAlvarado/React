import { useEffect, useState } from "react";
import axios from "axios";
import DetailPronostic from "./DetailPronostic";
const Pronostic = ({ city }) =>{
   const [pronostic, SetPronostic] = useState([])

   const apiKey = "088eee181164c5751c6967dbabfb2029";
   const API_URL = import.meta.env.VITE_API_WHEATHER_URL_PRONOSTIC_5DAY;

   useEffect(()=>{
      if(city){
         axios.get(`${API_URL}${city}&appid=${apiKey}`)
        .then((datos) => {
          SetPronostic(datos.data.list);
          console.log(datos.data.list);
        })
        .catch(() => {
          console.error("La petición falló");
        });
      }

   },[city])

   return(
      <section className="l-container2 secction__separator main-wheater">
         <h2> Pronostico 5 días</h2>
         <div className="card-container">
         {pronostic.filter((_, index) => [7, 15, 23, 31, 39].includes(index)).map((element, index) => (
            <DetailPronostic element={element} key={index}/>
        ))}
    
         </div>
         
      </section>
   )

}

export default Pronostic;