import type { WeatherData } from "../../types/WeatherData";
import "../WeatherCard/WeatherCard.css";

type WeatherCardProps = {
  data?: WeatherData;
};

function WeatherCard({ data }: WeatherCardProps) {
  const date: any = new Date();
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {data && (
        <div className="weather-card">
          <h1 className="city-name">{data.name}</h1>
          <p>{date.toLocaleDateString("en-EN", options)}</p>
          <h2>
            <span className="temperature">{data.main.temp}</span> °C
          </h2>
          <h3 className="description">{data.weather[0].description}</h3>
          <div className="details">
            <p>
              {data.wind.speed} m/s
              <span className="details-txt">Wind speed</span>
            </p>
            <p>
              {data.main.humidity} %
              <span className="details-txt">Humidity</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherCard;
