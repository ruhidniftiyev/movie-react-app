export const fetchMovies = async (payload) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${payload}&apikey=5636c888`
  );
  const data = await response.json();

  return data;
};

export const requestMovies = async (payload) => {
  let imdbIDArray = [];
  payload.favoriteList.map((movie) => imdbIDArray.push(movie.imdbID));
  const listObject = {
    title: `${payload.title}`,
    movies: imdbIDArray,
  };
  const response = await fetch("https://acb-api.algoritmika.org/api/movies/list", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(listObject),
  })
  const data = await response.json();

  return data.id;
};
