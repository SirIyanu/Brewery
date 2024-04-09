import React, { useEffect } from "react";
export const useFetch = (url) => {
  const [beer, setBeer] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that");
        }

        return res.json();
      })
      .then((beer) => {
        setBeer(beer);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { beer, isLoading, error };
};
