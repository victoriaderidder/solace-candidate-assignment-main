interface SearchProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export const Search = ({ searchTerm, onSearch, onReset }: SearchProps) => {
  return (
    <div>
      <input
        style={{
          padding: "8px 12px",
          border: "1px solid white",
          borderRadius: "4px",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "white",
          outline: "none",
        }}
        type="text"
        placeholder="Search advocates..."
        value={searchTerm}
        onChange={onSearch}
      />

      <button
        onClick={onReset}
        style={{
          padding: "8px 16px",
          marginLeft: "6px",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "6px",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "white",
          fontSize: "14px",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        Reset
      </button>
    </div>
  );
};
