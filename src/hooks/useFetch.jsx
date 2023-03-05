import { useEffect, useState } from "react";

const useFetch = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${path}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      });
  }, []);

  return { data, setData };
};

export default useFetch;
