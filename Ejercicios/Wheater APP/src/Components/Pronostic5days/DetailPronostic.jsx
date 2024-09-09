import { formatDate } from "../../Helpers/convertir";

const LinkImage = "https://openweathermap.org/img/wn/";

const DetailPronostic = ({ element }) => {
  // Verifica el valor de element.dt
  console.log("Timestamp:", element.dt);

  return (
    <div className="card-weather">
      <p className="date">{formatDate(element.dt)}</p>
      <img
        className="card-weather__image"
        src={`${LinkImage}${element.weather[0].icon}@2x.png`}
        alt={element.weather[0].description}
      />
      <p className="card-weather__weather">{element.weather[0].description}</p>
      <div className="card-weather__information">
        <div className="card-weather__details">
          <div className="flex">
            <i className="fa-solid fa-temperature-three-quarters"></i>
            <p>Temperatura</p>
          </div>
          <p className="temperature">{(element.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
        <div className="card-weather__details">
          <div className="flex">
            <i className="fa-solid fa-droplet"></i>
            <p>Humedad</p>
          </div>
          <p className="humidity">{element.main.humidity}%</p>
        </div>
        <div className="card-weather__details">
          <div className="flex">
            <i className="fa-solid fa-cloud"></i>
            <p>Nubosidad</p>
          </div>
          <p className="Nubosity">{element.clouds.all}%</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPronostic;