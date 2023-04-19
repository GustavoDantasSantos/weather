import { getHours } from "components/helpers/format-hours";
import { useEffect, useState } from "react";

export const ShowHours: React.FC = () => {
  const [currentHours, setCurrentHours] = useState<String>();
  useEffect(() => {
    setInterval(() => {
      let hours = getHours();
      setCurrentHours(hours);
    }, 1000);
  });
  return <span className="ml-54">{currentHours}</span>;
};
