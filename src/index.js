import filmCardsMarkup from './js/film-cards-markup'
import MovieApiService from './js/movie-api-service'

const movieApiService = new MovieApiService;

const refs = {
  filmsContainer: document.querySelector('.js-films-container')
}

movieApiService.fetchCards().then(films => renderFilmCards(films.results))

function renderFilmCards(films) {
  refs.filmsContainer.innerHTML = filmCardsMarkup(films)
}