import { useRef } from "react";
import "./WeatherForm.css";

type WeatherFormProps = {
  setCity: (value: string) => void;
  loading: boolean;
};

function WeatherForm({ setCity, loading }: WeatherFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(inputRef);
    setCity(inputRef.current?.value || "");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" ref={inputRef} />

        <button disabled={loading}>Get weather</button>
      </form>
    </>
  );
}

export default WeatherForm;
