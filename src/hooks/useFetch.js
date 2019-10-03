import { useState, useEffect } from "react";

// const initalPaginationState = {
//   count: 0,
//   next: "",
//   previous: null
// };

const useFetch = url => {
  const [data, setData] = useState([]);
  // const [pagination, setPagination] = useState(initalPaginationState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(url);
        const { results, ...pagination } = await res.json();

        setData(results);
        // setPagination(pagination);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
