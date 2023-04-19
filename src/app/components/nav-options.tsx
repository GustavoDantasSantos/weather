export const NavOptions: React.FC = () => {
  return (
    <nav className="my-auto">
      <ul className="flex py-3 px-3 gap-4">
        <li className="text-4xl text-white cursor-pointer">Today</li>
        <li className="text-4xl text-white cursor-pointer">Tommorow</li>
        <li className="text-4xl text-white cursor-pointer">Monthly Forecast</li>
      </ul>
    </nav>
  );
};
