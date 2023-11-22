import { useState, useEffect } from "react";
import axios from "axios";
import { Mode } from "../types/modesTypes";

const useModes = () => {
  const [modes, setModes] = useState<Mode[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchModes = async () => {
      try {
        const response = await axios.get<Mode[]>(
          "https://60816d9073292b0017cdd833.mockapi.io/modes"
        );
        setModes(response.data);
      } catch (error) {
        setError("Error fetching modes");
      } finally {
        setLoading(false);
      }
    };

    fetchModes();
  }, []);

  return { modes, loading, error };
};

export default useModes;
