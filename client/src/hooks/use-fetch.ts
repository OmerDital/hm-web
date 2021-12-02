import { useEffect, useState } from 'react';
import axios from 'axios';

type UseFetch<T> = [T[], boolean, Error | undefined];

const useFetch = <T>(url: string): UseFetch<T> => {
  const [isLoading, setIsIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T[]>(`api/${url}`);

        if (response) {
          setData(response.data);
        }
      } catch (e) {
        setError(error);
      } finally {
        setIsIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, isLoading, error];
};

export default useFetch;