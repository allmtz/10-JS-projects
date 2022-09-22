// img url format: `https://image.tmdb.org/t/p/w200/{imgSource}`

const API_KEY = "2fa9b8c3457255630ef48d6faeab6c29";

const img = document.body.querySelector("img");
const container = document.body.querySelector(".container");
const form = document.body.querySelector("form");
const searchBox = document.body.querySelector("form input");
const dropdown = document.body.querySelector(".dropdown");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  findMovies(searchBox.value);
  dropdown.style.display = "none";
});

async function findMovies(userSearch) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${String(
      searchBox.value
    )}`
  );
  const movies = await response.json();

  searchBox.value = "";
  container.innerText = "";

  // console.log(movies);  the response from movieDB

  movies.results.forEach((movie) => {
      //do not display movies with no backdrop or description
    if (movie.overview == "" || movie.poster_path == null) {
      return;
    } else {
      container.innerHTML +=
        //assigning movie.id makes it easier to select individual movies
        `<div class='card' id=${movie.id}>  
                          <img src= https://image.tmdb.org/t/p/w300${movie.poster_path}>
                          <div class="movie-info">
                              <h2 class="title">${movie.title}</h2>
                              <p class="rating">${movie.vote_average}</p>
                          </div>
                          <div class="overview">
                              <p>${movie.overview}</p>
                          </div>
                   </div>
                  `;
    }
  });

  const cards = document.body.querySelectorAll(".card"); //selects all movies that are displayed
  cards.forEach((card) => {
    //adds the overview animation
    card.addEventListener("mouseenter", (e) => {
      e.target.children[2].classList.add("active"); //selects 3rd child of of the card element, which is the 'overview' div
    });
    card.addEventListener("mouseleave", (e) => {
      e.target.children[2].classList.remove("active");
    });
    card.addEventListener("click", (e) => {
      const movieID = e.target.closest(".card").id; //get the ID of the movie the user clicks on

      getTrailer(movieID);
    });
  });
}

async function getTrailer(movieID) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`
  );
  const videos = await response.json();

  //returns an array of trailer objects
  const trailers = videos.results.filter(
    (video) => video.name.includes("Trailer") || video.name.includes("trailer")
  ); 

  if (trailers.length == 0) {
    alert("No Trailer Found");
    return;
  } else {
    const youtubeEmbed = `https://www.youtube.com/embed/${trailers[0].key}`; //selects the first trailer and uses the 'key' key to create a youtube URL

    //calls the MDB API using the id of the movie the user clicked on
    const secondCall = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
    ); 
    const movie = await secondCall.json();

    // console.log(movie);  the movie the user clicked on

    const date = new Date(movie.release_date);
    const year = date.getFullYear();

    dropdown.innerHTML = `        
                      <div class="dropdown-container">
                      <iframe class='video' width="400" height="300"src="${youtubeEmbed}"></iframe>
                      <div class="dropdown-info">
                          <div class="row">
                              <div>
                                  <h2>${movie.title}</h2>
                                  <h5>${year}</h5>
                              </div>
                              <div class="ratings">
                                  <p>${movie.vote_average.toFixed(1)}</p>
                                  <p>${movie.vote_count}</p>

                              </div>
                          </div>
                          <p>${movie.overview}}</p> 
                      </div>
                  `;
    dropdown.style.display = "inline-block";
  }
}