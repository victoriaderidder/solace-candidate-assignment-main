import { useState, useEffect } from "react";
import Advocate from "../types/advocate.types";

export const useAdvocates = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetch("/api/advocates");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        setAdvocates(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdvocates();
  }, []);

  return {
    advocates,
    isLoading,
    error,
  };
};
