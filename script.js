document.querySelector('form').onsubmit = async (event) => {
    event.preventDefault();
    const movieTitle = document.querySelector('input').value;
    if (movieTitle === "") {
        return;
    }
    const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=b82ae075`);
    const movieData = await response.json();
    document.querySelector('section').innerHTML = `
    <h2>${movieData.Title}</h2>
    <img src="${movieData.Poster}" alt="">
    <p>Год: ${movieData.Year}</p>
    <p>Жанр: ${movieData.Genre}</p>
    <p>Рейтинг: ${movieData.imdbRating}</p>
    <p>Сюжет: ${movieData.Plot}</p>
`;
};
