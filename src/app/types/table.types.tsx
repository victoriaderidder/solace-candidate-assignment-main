import { ReactNode } from "react";

export default interface TableProps {
  headers: string[];
  children: ReactNode;
}
