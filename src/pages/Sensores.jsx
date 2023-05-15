import { CardSensor } from '../components/CardSensor.tsx';
import { CardWeater } from '../components/CardWeater.tsx';

const response = await fetch(
  'https://sada-api-production.up.railway.app/api/fake'
);
const data = await response.json();

const lastObject = data[data.length - 1];

const currentDate = new Date();

currentDate.setHours(currentDate.getHours() - 1);

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedDate = `${day}/${month}/${year}`;
const formattedTime = `${hours}:${minutes}`;

// generate thee days array a partir de la fecha actual
const threeDays = [currentDate];

for (let i = 0; i < 2; i++) {
  const newDate = new Date(threeDays[i]);
  newDate.setDate(newDate.getDate() + 1);
  threeDays.push(newDate);
}

const daysOfWeek = threeDays.map((date) =>
  date.toLocaleDateString('es-ES', { weekday: 'long' })
);
export const Sensores = () => {
  return (
    <>
      <div className="row">
        {daysOfWeek.map((day, index) => (
          <CardWeater day={day} key={'dia-' + day} />
        ))}
      </div>

      <h4 className="text-center">
        Ultima Actualización: {formattedDate}:{formattedTime}
      </h4>

      <div className="row">
        {Object.keys(lastObject).map((key, index) => (
          <CardSensor
            key={'sensores-' + index}
            sensorName={key}
            sensorValue={lastObject[key]}
          />
        ))}
      </div>
    </>
  );
};
