import { Search } from "./search.component";

interface HeaderProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export const Header = ({ searchTerm, onSearch, onReset }: HeaderProps) => {
  return (
    <header className="bg-[#2B4C3F] text-white w-full p-4 sticky top-0 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="m-0">Solace</h1>
        <Search searchTerm={searchTerm} onSearch={onSearch} onReset={onReset} />
      </div>
    </header>
  );
};
