import { createContext, useContext, ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: SearchContextType;
}) => <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch error!");
  }
  return context;
};
