import { ReactNode } from "react";

interface TableProps {
  headers: string[];
  children: ReactNode;
}

export const Table = ({ headers, children }: TableProps) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #2B4C3F",
          borderRadius: "4px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#2B4C3F",
              color: "white",
            }}
          >
            {headers.map((header) => (
              <th
                key={header}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: "500",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ fontSize: "14px" }}>{children}</tbody>
      </table>
    </div>
  );
};

export const TableRow = ({ children }: { children: ReactNode }) => (
  <tr
    style={{
      borderBottom: "1px solid #2B4C3F",
    }}
  >
    {children}
  </tr>
);

export const TableCell = ({ children }: { children: ReactNode }) => (
  <td
    style={{
      padding: "12px 16px",
      color: "#374151",
    }}
  >
    {children}
  </td>
);
