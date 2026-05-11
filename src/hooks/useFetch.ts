import { useState } from "react";

function useFetch(timeout: number = 2000) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getData(url: string) {
    setLoading(true);

    setTimeout(async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((e) => setData(e))
        .finally(() => setLoading(false));
    }, timeout);
  }

  return { data, loading, getData };
}

export default useFetch;
