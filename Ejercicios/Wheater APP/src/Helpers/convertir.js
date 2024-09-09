export const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2);
};

export const formatDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000); // Convertir a milisegundos
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};