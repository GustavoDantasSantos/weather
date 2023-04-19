import Image from "next/image";
import weather from "../asserts/weather.svg";
import { ShowHours } from "./show-hours";
import { NavOptions } from "./nav-options";

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between px-3">
        <div className="flex items-center w-[20%] h-40 relative">
          <Image src={weather} alt="Weather Icon" />
          <h1 className="text-5xl ml-5">WeatherMe</h1>
          <div className="absolute bottom-0 right-0">
            <ShowHours />
          </div>
        </div>
        <NavOptions />
      </div>
    </header>
  );
};
