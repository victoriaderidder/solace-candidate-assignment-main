import { Search } from "./search.component";

interface HeaderProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export const Header = ({ searchTerm, onSearch, onReset }: HeaderProps) => {
  return (
    <header
      style={{
        backgroundColor: "#2B4C3F",
        color: "white",
        width: "100%",
        padding: "1rem",
        position: "sticky",
        top: 0,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ margin: 0 }}>Solace</h1>
        <Search searchTerm={searchTerm} onSearch={onSearch} onReset={onReset} />
      </div>
    </header>
  );
};
