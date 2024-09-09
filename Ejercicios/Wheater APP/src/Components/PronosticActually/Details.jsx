const Details = ({ humedad, presion, velocidad, nubosidad, visibilidad }) => {
   // Lista de detalles con íconos
   const nameDetails = [
     { detail: "Humedad", value: humedad, icon: "fa-solid fa-droplet", unit: "%" },
     { detail: "Presión", value: presion, icon: "fa-solid fa-compass", unit: "hPa" },
     { detail: "Vel. de Viento", value: velocidad, icon: "fa-solid fa-wind", unit: "m/s" },
     { detail: "Nubosidad", value: nubosidad, icon: "fa-solid fa-cloud", unit: "%" },
     { detail: "Visibilidad", value: visibilidad, icon: "fa-solid fa-eye", unit: "km" },
   ];
   return (
     <div className="weather-container__details">
       {nameDetails.map((item, index) => (
         <div key={index} className="details-container">
           <p>{item.detail}</p>
           <div className="details-container__information">
             <i className={item.icon}></i>
             <p className="detail-value">
               {item.value !== undefined ? `${item.value} ${item.unit}` : "___"}
             </p>
           </div>
         </div>
       ))}
     </div>
   );
 };
 
 export default Details;