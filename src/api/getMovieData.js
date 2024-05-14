const getMovieData = (movieTitle) => {
    const url = `https://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;

    const movieData = fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.Search;
        })
        .catch((error) => {
            console.error(error);
        });

    return movieData;
};

export default getMovieData;