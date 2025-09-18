import { useSearch } from "./search.context";

// Added to avoid prop drilling from Header -> Search
export const Search = () => {
  const { searchTerm, onSearch, onReset } = useSearch();

  return (
    <div>
      <input
        className="px-3 py-2 border border-white rounded bg-white/10 text-white outline-none placeholder-white/70"
        type="text"
        placeholder="Search advocates..."
        value={searchTerm}
        onChange={onSearch}
      />

      <button
        onClick={onReset}
        className="px-4 py-2 ml-1.5 border border-white/30 rounded-md bg-white/10 text-white text-sm cursor-pointer transition-all duration-200 hover:bg-white/20"
      >
        Reset
      </button>
    </div>
  );
};
