/* Navigate to https://www.omdbapi.com/ and get your own api key*/
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=faa2d50&s=Mary Magdalene';

function callAPI() {
    
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        document.querySelector("#movie_id").innerHTML = json.Search[0].imdbID || 'N/A';
        document.querySelector("#movie_title").innerHTML = json.Search[0].Title || 'N/A';
        document.querySelector("#movie_year").innerHTML = json.Search[0].Year || 'N/A';
        document.querySelector("#movie_poster").innerHTML = `<img src="${json.Search[0].Poster || 'N/A'}" />`;
      })
      .catch(error => console.error('Error fetching the API:', error));
  }