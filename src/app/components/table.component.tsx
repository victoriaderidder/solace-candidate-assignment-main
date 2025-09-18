import { ReactNode } from "react";

interface TableProps {
  headers: string[];
  children: ReactNode;
}

// Added to stop table from resizing on search
const columnWidths = {
  "First Name": "w-[150px]",
  "Last Name": "w-[150px]",
  City: "w-[120px]",
  Degree: "w-[120px]",
  Specialties: "w-[300px]",
  "Years of Experience": "w-[120px]",
  "Phone Number": "w-[150px]",
};

export const Table = ({ headers, children }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[1000px] w-full border border-[#2B4C3F] rounded-lg overflow-hidden bg-white">
        <thead>
          <tr className="bg-[#2B4C3F] text-white">
            {headers.map((header) => (
              <th
                key={header}
                className={`px-4 py-3 text-left font-medium text-sm whitespace-nowrap ${
                  columnWidths[header as keyof typeof columnWidths]
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">{children}</tbody>
      </table>
    </div>
  );
};

export const TableRow = ({ children }: { children: ReactNode }) => (
  <tr className="border-b border-[#2B4C3F]">{children}</tr>
);

export const TableCell = ({ children }: { children: ReactNode }) => (
  <td className="px-4 py-3 text-gray-700">{children}</td>
);
