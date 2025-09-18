"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/header.component";
import { Table, TableRow, TableCell } from "./components/table.component";
import { SearchProvider } from "./components/search/search.context";

interface Advocate {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: string;
  id: number;
}

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val.toLowerCase());

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate: Advocate) => {
      // added for scalability: what if there are thousands of Johns?
      // It would also be nice to be able to filter by city (a dropdown?)
      const fullName =
        `${advocate.firstName} ${advocate.lastName}`.toLowerCase();

      return (
        advocate.firstName.toLowerCase().includes(val) ||
        advocate.lastName.toLowerCase().includes(val) ||
        fullName.toLowerCase().includes(val) ||
        advocate.city.toLowerCase().includes(val) ||
        advocate.degree.toLowerCase().includes(val) ||
        advocate.specialties.some((specialty) =>
          specialty.toLowerCase().includes(val)
        ) ||
        advocate.yearsOfExperience.toString().includes(val) ||
        advocate.phoneNumber.toString().includes(val)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const handleReset = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  const headers = [
    "First Name",
    "Last Name",
    "City",
    "Degree",
    "Specialties",
    "Years of Experience",
    "Phone Number",
  ];

  const searchValue = {
    searchTerm,
    onSearch: onChange,
    onReset: handleReset,
  };

  return (
    <SearchProvider value={searchValue}>
      <main>
        <Header />
        <div className="content" style={{ margin: "24px" }}>
          <Table headers={headers}>
            {filteredAdvocates.map((advocate: Advocate) => (
              <TableRow key={advocate.id}>
                <TableCell>{advocate.firstName}</TableCell>
                <TableCell>{advocate.lastName}</TableCell>
                <TableCell>{advocate.city}</TableCell>
                <TableCell>{advocate.degree}</TableCell>
                <TableCell>
                  {advocate.specialties.map((specialty, index) => (
                    <div
                      key={`${specialty}-${index}`}
                      className="px-2 m-1 bg-gray-100 rounded inline-block text-xs"
                    >
                      {specialty}
                    </div>
                  ))}
                </TableCell>
                <TableCell>{advocate.yearsOfExperience}</TableCell>
                <TableCell>{advocate.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </main>
    </SearchProvider>
  );
}
