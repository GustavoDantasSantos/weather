import SearchIcon from "@mui/icons-material/Search";

type SearchCityProps = {
  setCity: (value: string) => void;
};

export const SearchCity: React.FC<SearchCityProps> = ({
  setCity,
}: SearchCityProps) => {
  return (
    <div className="bg-[#D9D9D9] h-10 w-96 p-2 rounded-lg flex justify-between items-center">
      <SearchIcon />
      <input
        className="bg-transparent border-none outline-none w-full px-3 text-black"
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search location..."
      />
    </div>
  );
};
