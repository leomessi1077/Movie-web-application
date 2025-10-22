import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {

    //3 states created , initial state of those null
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");//before api call, loading..
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);//after calling api, loading stop
                if (res && res.results) {
                    setData(res);
                } else {
                    console.error("No data received from API for:", url);
                    setError("Failed to load data. Check console for details.");
                }
            })
            .catch((err) => {
                setLoading(false);
                console.error("Fetch error:", err);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;