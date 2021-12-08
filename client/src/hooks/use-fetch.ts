import { useEffect, useState } from 'react';
import axios from 'axios';

type UseFetch<T> = [T | undefined, boolean, Error | undefined];

const useFetch = <T>(url: string, defaultValue?: T): UseFetch<T> => {
  const [isLoading, setIsIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(`api/${url}`);

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