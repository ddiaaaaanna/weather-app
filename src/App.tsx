import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import useFetch from "./hooks/useFetch";
import { type WeatherData } from "./types/WeatherData";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function App() {
  const [city, setCity] = useState<string>("");
  const { data, loading, getData } = useFetch();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_TOKEN}&units=metric`;
      getData(url);
    }
  }, [city]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setWeatherData(data);
    }
  }, [data]);

  useEffect(() => {
    if (loading) {
      document.body.style.cursor = "wait";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [loading]);

  return (
    <div className="weather-card">
      <WeatherForm setCity={setCity} loading={loading} />
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default App;
