import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(JSON.stringify(err.message),"errr")
        await new Promise(reject => setTimeout(reject, 1000));
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      };
    }
  fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;