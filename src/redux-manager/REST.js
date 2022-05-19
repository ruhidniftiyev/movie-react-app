export const fetchMovies = async (payload) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${payload}&apikey=5636c888`
  );
  const data = await response.json();

  return data;
};
