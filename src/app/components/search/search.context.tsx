import SearchContextType from "../../types/search.types";
import { createContext, useContext, ReactNode } from "react";

// Added to avoid prop drilling from Header -> Search

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
