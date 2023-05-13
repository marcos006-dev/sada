export const CardSensor = ({ sensorName, sensorValue }) => {
  enum SensorType {
    temperature = 'Temperatura',
    humidity = 'Humedad',
    precipitationsPerMinute = 'Precipitaciones por minuto',
    acumulatedPrecipitations = 'Precipitaciones acumuladas',
    windDirection = 'Dirección del viento	',
    windForce = 'Fuerza del viento',
    windSpeed = 'Velocidad del viento',
  }

  return (
    <div className="col-md-4 col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title m-b-5 text-center">
            <b>{SensorType[sensorName]}</b>
          </h5>
          <h3 className="font-light text-center">{sensorValue}</h3>
          <div className="m-t-20 text-center"></div>
        </div>
      </div>
    </div>
  );
};
