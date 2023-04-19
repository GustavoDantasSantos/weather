import { useState } from "react";
import { CardContent } from "./card-content";
import { SearchCity } from "./search-city";
import { StatusWeather } from "./status-weather";

export const Card: React.FC = () => {
  const [city, setCity] = useState<string>("São Paulo");
  return (
    <div className="w-full h-screen flex flex-col items-center overflow-hidden">
      <SearchCity setCity={setCity} />
      <CardContent city={city} />
      <StatusWeather />
    </div>
  );
};
