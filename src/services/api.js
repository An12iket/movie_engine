const API_KEY = "fd1776c47eb56a6817208eb58e676d44";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if(!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();
  return data.results;
  } catch(err){
    console.error("Error fetching movies", err)
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  if(!response.ok) throw new Error("Failed to fetch")
  const data = await response.json();
  return data.results;
} catch(err){
  console.error("Error fetching movies:", err);
  return [];
}
};