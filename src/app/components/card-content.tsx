import LocationOnIcon from "@mui/icons-material/LocationOn";
import Thermostat from "../asserts/thermostat.svg";
import Image from "next/image";

type CardContentProps = {
  city: string;
};

export const CardContent: React.FC<CardContentProps> = ({
  city,
}: CardContentProps) => {
  return (
    <div className="bg-gradient-to-br from-fuchsia-600 to-black w-1/3 h-auto mt-20 rounded-xl p-8">
      <div className="flex gap-4">
        <p>{city}</p>
        <LocationOnIcon />
      </div>
      <div className="flex my-10 items-center">
        <p>{new Date().toLocaleDateString()}</p>
        <div className="text-8xl mx-auto flex gap-4 items-center">
          <Image src={Thermostat} alt="Thermostat" />
          <span>18°C</span>
        </div>
      </div>
      <div className="flex gap-10 w-full h-auto mx-auto">
        <div>
          <span>Humidity</span>
          <p>99%</p>
        </div>
        <div>
          <span>Visiblity</span>
          <p>99%</p>
        </div>
        <div>
          <span>Air Pressure</span>
          <p>99%</p>
        </div>
        <div>
          <span>Wind</span>
          <p>99%</p>
        </div>
      </div>
    </div>
  );
};
