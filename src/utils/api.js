import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Debug: Check if token is loaded
if (!TMDB_TOKEN) {
    console.error("❌ TMDB_TOKEN is missing! Please check your .env file");
    console.error("Expected: VITE_APP_TMDB_TOKEN=your_token_here");
} else {
    console.log("✅ TMDB API Token loaded successfully");
}

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        console.log("🔄 Fetching:", BASE_URL + url);
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        console.log("✅ Success:", url, "- Results:", data.results?.length || 0);
        return data;
    } catch (err) {
        console.error("❌ API Error:", err.response?.status, err.response?.data || err.message);
        console.error("URL:", BASE_URL + url);
        return null;
    }
};