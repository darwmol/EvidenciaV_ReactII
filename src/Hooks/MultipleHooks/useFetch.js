import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]); // Agrega `url` como dependencia

  const getFetch = async () => {
    const resp = await fetch(url);

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: null,
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
