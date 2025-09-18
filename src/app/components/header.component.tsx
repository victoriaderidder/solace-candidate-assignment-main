import { Search } from "./search/search.component";

export const Header = () => {
  return (
    <header className="bg-[#2B4C3F] text-white w-full p-4 sticky top-0 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="m-0">Solace</h1>
        <Search />
      </div>
    </header>
  );
};
