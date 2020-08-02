/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/site-abstract-component.js":
/*!***************************************************!*\
  !*** ./src/components/site-abstract-component.js ***!
  \***************************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
class AbstractComponent {
  constructor() {
    this._element = null;

    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
  }

  static makeElement(template) {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstElementChild;
  }

  getElement() {
    if (!this._element) {
      this._element = AbstractComponent.makeElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    throw Error(`Abstract method not implemented`);
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/site-data.js":
/*!*************************************!*\
  !*** ./src/components/site-data.js ***!
  \*************************************/
/*! exports provided: getFilmData, films, numberOfSeen, filtersValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilmData", function() { return getFilmData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "films", function() { return films; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfSeen", function() { return numberOfSeen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtersValues", function() { return filtersValues; });
const NUMBER_OF_FILMS_TO_RENDER = 20;
const NUMBER_OF_TITLES = 7;
const STRINGS_TO_DESCRIPTION = 3;
const COMMENTS_NUMBER = 4;

const getRandomIntegerUnder = (under = 1) => {
  return Math.floor(Math.random() * under);
};

const minutesToHours = (minutes) => {
  let hours = Math.floor(minutes / 60);
  let lastMinutes = minutes - (hours * 60);

  if (lastMinutes < 10) {
    return `${hours}h 0${lastMinutes}m`;
  }

  return `${hours}h ${lastMinutes}m`;
};

const avoidZero = (number) => {
  if (number === 0) {
    number = 1;
  }

  return number;
};

const getPoster = () => {
  return [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`
  ][getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getTitle = () => {
  return [
    `Made For Each Other`,
    `Popeye Meets Sindbad`,
    `Sagebrush Trail`,
    `Santa Claus Conquers The Martians`,
    `The Dance Of Life`,
    `The Great Flamarion`,
    `The Man With The Golden Arm`
  ][getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getRating = () => {
  return [8.1, 7.5, 6.8, 7.7, 9.0, 1.2, 5.5][getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getYear = () => {
  return [1929, 1956, 1977, 2002, 1993, 1961, 1985][getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getDuration = () => {
  return minutesToHours([124, 136, 142, 112, 137, 141, 55][getRandomIntegerUnder(NUMBER_OF_TITLES)]);
};

const getGenre = () => {
  return [`comedy`, `musical`, `action`, `drama`, `thriller`, `horror`, `documental`][getRandomIntegerUnder(NUMBER_OF_TITLES)];
};

const getDescription = () => {
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. 
  Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. 
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. 
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. 
  Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. 
  Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.
  `.split(`.`, avoidZero(getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)));
};

const getCommentsData = () => ({
  author: [
    `Tim Macoveev`,
    `John Doe`,
    `Don Joe`,
    `Bon Boe`,
    `Ron Chloe`][getRandomIntegerUnder(COMMENTS_NUMBER)],
  text: [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`
  ][getRandomIntegerUnder(COMMENTS_NUMBER)],
  date: Date.now() - (1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000),
  emoji: [
    `./images/emoji/smile.png`,
    `./images/emoji/sleeping.png`,
    `./images/emoji/puke.png`,
    `./images/emoji/angry.png`,
  ][getRandomIntegerUnder(COMMENTS_NUMBER)],
});


const getFilmData = () => ({
  poster: getPoster(),
  title: getTitle(),
  rating: getRating(),
  year: getYear(),
  duration: getDuration(),
  genre: getGenre(),
  description: getDescription(),
  comments: new Array(avoidZero(getRandomIntegerUnder(NUMBER_OF_TITLES))).fill(``).map(getCommentsData),
  state: {
    isToWatchlist: false,
    isWatched: false,
    isFavorite: false,
  },
  age: [12, 14, 16, 18][getRandomIntegerUnder(COMMENTS_NUMBER)],
  director: [`Anthony Mann`, `Anthony Wann`, `Anthony Zann`][getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)],
  writer: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`][getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)],
  actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`][getRandomIntegerUnder(STRINGS_TO_DESCRIPTION)],
  releaseDate: getYear(),
  runtime: getDuration(),
  country: [`USA`, `Canada`, `France`, `Germany`, `Italy`, `Spain`, `Norway`][getRandomIntegerUnder(NUMBER_OF_TITLES)],
  genres: [`comedy`, `musical`, `action`, `drama`, `thriller`, `horror`, `documental`]
    .slice(getRandomIntegerUnder(0), avoidZero(getRandomIntegerUnder(NUMBER_OF_TITLES))),
});

const films = new Array(NUMBER_OF_FILMS_TO_RENDER).fill(``).map(getFilmData);
const numberOfSeen = getRandomIntegerUnder(NUMBER_OF_TITLES);

const filtersValues = [
  {filter: `All movies`, value: films.length},
  {filter: `Watchlist`, value: getRandomIntegerUnder(NUMBER_OF_TITLES)},
  {filter: `History`, value: getRandomIntegerUnder(NUMBER_OF_TITLES)},
  {filter: `Favorites`, value: getRandomIntegerUnder(NUMBER_OF_TITLES)},
];


/***/ }),

/***/ "./src/components/site-film-card.js":
/*!******************************************!*\
  !*** ./src/components/site-film-card.js ***!
  \******************************************/
/*! exports provided: FilmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmCard", function() { return FilmCard; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class FilmCard extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  constructor({poster, title, rating, year, duration, genre, description, comments, state}) {
    super();
    this._poster = poster;
    this._title = title;
    this._rating = rating;
    this._year = year;
    this._duration = duration;
    this._genre = genre;
    this._description = description;
    this._comments = comments;
    this._state = state;
  }

  getTemplate() {
    return `
     <article class="film-card">
        <h3 class="film-card__title">${this._title}</h3>
        <p class="film-card__rating">${this._rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${this._year}</span>
          <span class="film-card__duration">${this._duration}</span>
          <span class="film-card__genre">${this._genre}</span>
        </p>
        <img src="${this._poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${this._description}</p>
        <a class="film-card__comments">${this._comments.length} comments</a>
        <form class="film-card__controls">
          <button class="${this._state.isToWatchlist ? `film-card__controls-item--active` : ``} film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="${this._state.isWatched ? `film-card__controls-item--active` : ``} film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="${this._state.isFavorite ? `film-card__controls-item--active` : ``} film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`;
  }
}


/***/ }),

/***/ "./src/components/site-film-popup.js":
/*!*******************************************!*\
  !*** ./src/components/site-film-popup.js ***!
  \*******************************************/
/*! exports provided: FilmPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmPopup", function() { return FilmPopup; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class FilmPopup extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  constructor({poster, age, title, rating, director, writer, actors, releaseDate, runtime, country, genres, description, comments}) {
    super();
    this._poster = poster;
    this._age = age;
    this._title = title;
    this._rating = rating;
    this._director = director;
    this._writer = writer;
    this._actors = actors;
    this._releaseDate = releaseDate;
    this._runtime = runtime;
    this._country = country;
    this._genres = genres;
    this._description = description;
    this._comments = comments;
  }

  getTemplate() {
    return `
      <section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="form-details__top-container">
            <div class="film-details__close">
              <button class="film-details__close-btn" type="button">close</button>
            </div>
            <div class="film-details__info-wrap">
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="${this._poster}" alt="">
      
                <p class="film-details__age">${this._age}+</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${this._title}</h3>
                    <p class="film-details__title-original">Original: ${this._title}</p>
                  </div>
      
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${this._rating}</p>
                  </div>
                </div>
      
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">${this._director}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">${this._writer}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${this._actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">${this._releaseDate}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${this._runtime}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">${this._country}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Genres</td>
                    <td class="film-details__cell">
                    ${Array.from(this._genres).map((genre) => `
                    <span class="film-details__genre">${genre}</span>`)}
                  </tr>
                </table>
      
                <p class="film-details__film-description">
                  ${this._description}
                </p>
              </div>
            </div>
      
            <section class="film-details__controls">
              <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
              <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
              <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
              <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
              <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
              <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
            </section>
          </div>
          
          <div class="form-details__middle-container visually-hidden">
            <section class="film-details__user-rating-wrap">
              <div class="film-details__user-rating-controls">
                <button class="film-details__watched-reset" type="button">Undo</button>
              </div>
      
              <div class="film-details__user-score">
                <div class="film-details__user-rating-poster">
                  <img src="${this._poster}" alt="film-poster" class="film-details__user-rating-img">
                </div>
      
                <section class="film-details__user-rating-inner">
                  <h3 class="film-details__user-rating-title">${this._title}</h3>
      
                  <p class="film-details__user-rating-feelings">How you feel it?</p>
      
                  <div class="film-details__user-rating-score">
                    ${rates.map((number) => `
                      <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${number}" id="rating-${number}">
                      <label class="film-details__user-rating-label" for="rating-${number}">${number}</label>
                    `).join(``)}
                  </div>
                </section>
              </div>
            </section>
          </div>
      
          <div class="form-details__bottom-container">
            <section class="film-details__comments-wrap">
              <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>
      
              <ul class="film-details__comments-list">
                ${this._comments.map((comment) => `
                  <li class="film-details__comment">
                  <span class="film-details__comment-emoji">
                    <img src="${comment.emoji}" width="55" height="55" alt="emoji">
                  </span>
                  <div>
                    <p class="film-details__comment-text">${comment.text}</p>
                    <p class="film-details__comment-info">
                      <span class="film-details__comment-author">${comment.author}</span>
                      <span class="film-details__comment-day">${new Date(comment.date).toDateString()}</span>
                      <button class="film-details__comment-delete">Delete</button>
                    </p>
                  </div>
                </li>
                `).join(``)}
              </ul>
      
              <div class="film-details__new-comment">
                <div for="add-emoji" class="film-details__add-emoji-label"></div>
      
                <label class="film-details__comment-label">
                  <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
                </label>
      
                <div class="film-details__emoji-list">
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping">
                  <label class="film-details__emoji-label" for="emoji-smile">
                    <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                  </label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
                  <label class="film-details__emoji-label" for="emoji-sleeping">
                    <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                  </label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-gpuke">
                    <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                  </label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-angry">
                    <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                  </label>
                </div>
              </div>
            </section>
          </div>
        </form>
      </section>`;
  }
}


/***/ }),

/***/ "./src/components/site-film-section.js":
/*!*********************************************!*\
  !*** ./src/components/site-film-section.js ***!
  \*********************************************/
/*! exports provided: FilmSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmSection", function() { return FilmSection; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class FilmSection extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `<section class="films"></section>`;
  }
}


/***/ }),

/***/ "./src/components/site-films-commented.js":
/*!************************************************!*\
  !*** ./src/components/site-films-commented.js ***!
  \************************************************/
/*! exports provided: CommentedFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentedFilms", function() { return CommentedFilms; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class CommentedFilms extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
      <section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
      </section>`;
  }
}


/***/ }),

/***/ "./src/components/site-films-container.js":
/*!************************************************!*\
  !*** ./src/components/site-films-container.js ***!
  \************************************************/
/*! exports provided: FilmsListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsListContainer", function() { return FilmsListContainer; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class FilmsListContainer extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `<div class="films-list__container"></div>`;
  }
}


/***/ }),

/***/ "./src/components/site-films-list-title.js":
/*!*************************************************!*\
  !*** ./src/components/site-films-list-title.js ***!
  \*************************************************/
/*! exports provided: FilmsListTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsListTitle", function() { return FilmsListTitle; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class FilmsListTitle extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `<h2 class="films-list__title"></h2>`;
  }
}


/***/ }),

/***/ "./src/components/site-films-list.js":
/*!*******************************************!*\
  !*** ./src/components/site-films-list.js ***!
  \*******************************************/
/*! exports provided: FilmsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsList", function() { return FilmsList; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class FilmsList extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `<section class="films-list"></section>`;
  }
}


/***/ }),

/***/ "./src/components/site-films-top.js":
/*!******************************************!*\
  !*** ./src/components/site-films-top.js ***!
  \******************************************/
/*! exports provided: TopFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopFilms", function() { return TopFilms; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class TopFilms extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
      </section>`;
  }
}


/***/ }),

/***/ "./src/components/site-movie-controller.js":
/*!*************************************************!*\
  !*** ./src/components/site-movie-controller.js ***!
  \*************************************************/
/*! exports provided: MovieController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieController", function() { return MovieController; });
/* harmony import */ var _site_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-utils */ "./src/components/site-utils.js");
/* harmony import */ var _site_page_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-page-controller */ "./src/components/site-page-controller.js");
/* harmony import */ var _site_show_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-show-more */ "./src/components/site-show-more.js");




const body = document.querySelector(`body`);
const mainElement = document.querySelector(`.main`);

class MovieController {
  constructor(data, onDataChange) {
    this._data = data;
    this._onDataChange = onDataChange;
  }

  init() {
    _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].renderPopup(this._data[0]);
    this._onCardControlClick();
    this._onCardClick();
  }

  _onCardClick() {
    mainElement.querySelectorAll(`.film-card`).forEach((card) => {
      card.addEventListener(`click`, (evt) => {
        if (evt.target.tagName === `TITLE` || `IMG` || `P`) {
          const cardId = parseInt(`${evt.target.parentNode.getAttribute(`data-id`)}`, 10);
          _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].remove(body.querySelector(`.film-details`));
          _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].renderPopup(this._data[cardId]);
          body.querySelector(`.film-details`).classList.remove(`visually-hidden`);
          body.querySelector(`.film-details`).setAttribute(`data-id`, cardId);
          body.querySelector(`.film-details__controls`).setAttribute(`data-controls`, cardId);
          this._onPopupControlClick();
          this._onCommentEmojiClick();
          this._onRatingControlClick();
          this._onCommentDeleteClick();
        }
      });
    });
  }

  _onCardControlClick() {
    const dataCopy = this._data.slice();

    mainElement.querySelectorAll(`.film-card`).forEach((card) => {
      card.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (evt.target.tagName === `BUTTON`) {
          const currentId = card.dataset.id;

          evt.target.classList.toggle(`film-card__controls-item--active`);

          if (evt.target.classList.contains(`film-card__controls-item--add-to-watchlist`)) {
            dataCopy[currentId].state.isToWatchlist = !dataCopy[currentId].state.isToWatchlist;
          }

          if (evt.target.classList.contains(`film-card__controls-item--mark-as-watched`)) {
            dataCopy[currentId].state.isWatched = !dataCopy[currentId].state.isWatched;
          }

          if (evt.target.classList.contains(`film-card__controls-item--favorite`)) {
            dataCopy[currentId].state.isFavorite = !dataCopy[currentId].state.isFavorite;
          }

          this._onDataChange(dataCopy, this._data);
          const controller = new _site_page_controller__WEBPACK_IMPORTED_MODULE_1__["PageController"](mainElement.querySelector(`.films-list__container`), this._data);
          controller.init();
          _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].render(mainElement.querySelector(`.films-list__container`), _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].getElementFromClass(new _site_show_more__WEBPACK_IMPORTED_MODULE_2__["ShowMoreButton"]()), _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].Position.BEFOREEND);
          const movieController = new MovieController(this._data, this._onDataChange);
          movieController.init();
        }
      });
    });
  }

  _onPopupControlClick() {
    const dataCopy = this._data.slice();
    const currentCard = body.querySelector(`.film-details__controls`)
      .dataset.controls;

    body.querySelector(`.film-details__controls`).addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `LABEL` && evt.target.classList.contains(`film-details__control-label`)) {
        const formData = new FormData(body.querySelector(`.film-details__inner`));

        if (evt.target.classList.contains(`film-details__control-label--watchlist`)) {
          dataCopy[currentCard].state.isToWatchlist = formData.get(`watchlist`) !== `on`;
        }

        if (evt.target.classList.contains(`film-details__control-label--watched`)) {
          dataCopy[currentCard].state.isWatched = formData.get(`watched`) !== `on`;
          body.querySelector(`.form-details__middle-container`).classList.remove(`visually-hidden`);
        }

        if (evt.target.classList.contains(`film-details__control-label--favorite`)) {
          dataCopy[currentCard].state.isFavorite = formData.get(`favorite`) !== `on`;
        }

        this._onDataChange(dataCopy, this._data);
        const controller = new _site_page_controller__WEBPACK_IMPORTED_MODULE_1__["PageController"](mainElement.querySelector(`.films-list__container`), this._data);
        controller.init();
        _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].render(mainElement.querySelector(`.films-list__container`), _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].getElementFromClass(new _site_show_more__WEBPACK_IMPORTED_MODULE_2__["ShowMoreButton"]()), _site_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].Position.BEFOREEND);
        const movieController = new MovieController(this._data, this._onDataChange);
        movieController.init();
      }
    });
  }

  _onCommentEmojiClick() {
    const emojiContainer = body.querySelector(`.film-details__add-emoji-label`);
    const emojiHeight = body.querySelector(`.film-details__comment-emoji img`).getAttribute(`height`);
    const emojiWidth = body.querySelector(`.film-details__comment-emoji img`).getAttribute(`width`);
    emojiContainer.innerHTML = ``;

    body.querySelectorAll(`.film-details__emoji-label`).forEach((label) => {
      label.addEventListener(`click`, () => {
        switch (label.getAttribute(`for`)) {
          case `emoji-sleeping`:
            emojiContainer.innerHTML = `<img src="./images/emoji/sleeping.png" width="${emojiWidth}" height="${emojiHeight}" alt="emoji">`;
            break;
          case `emoji-smile`:
            emojiContainer.innerHTML = `<img src="./images/emoji/smile.png" width="${emojiWidth}" height="${emojiHeight}" alt="emoji">`;
            break;
          case `emoji-gpuke`:
            emojiContainer.innerHTML = `<img src="./images/emoji/puke.png" width="${emojiWidth}" height="${emojiHeight}" alt="emoji">`;
            break;
          case `emoji-angry`:
            emojiContainer.innerHTML = `<img src="./images/emoji/angry.png" width="${emojiWidth}" height="${emojiHeight}" alt="emoji">`;
            break;
        }
      });
    });
  }

  _onRatingControlClick() {
    const totalRating = parseInt(body.querySelector(`.film-details__total-rating`).textContent, 10);

    body.querySelectorAll(`.film-details__user-rating-label`).forEach((control) => {
      control.addEventListener(`click`, (evt) => {
        const middleRating = (totalRating + parseInt(`${evt.target.textContent}`, 10)) / 2;
        body.querySelector(`.film-details__total-rating`).textContent = middleRating;
      });
    });
  }
}


/***/ }),

/***/ "./src/components/site-navigation.js":
/*!*******************************************!*\
  !*** ./src/components/site-navigation.js ***!
  \*******************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");
/* harmony import */ var _site_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-data */ "./src/components/site-data.js");



class Navigation extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
      <nav class="main-navigation">
        ${Array.from(_site_data__WEBPACK_IMPORTED_MODULE_1__["filtersValues"]).map((filter) => `
        <a href="${filter.filter}" class="main-navigation__item main-navigation__item--active">${filter.filter} <span class="main-navigation__item-count">${filter.value}</span></a>
        `).join(``)}
        <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
      </nav>`;
  }
}


/***/ }),

/***/ "./src/components/site-page-controller.js":
/*!************************************************!*\
  !*** ./src/components/site-page-controller.js ***!
  \************************************************/
/*! exports provided: PageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageController", function() { return PageController; });
/* harmony import */ var _site_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-data */ "./src/components/site-data.js");
/* harmony import */ var _site_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-utils */ "./src/components/site-utils.js");



const mainElement = document.querySelector(`.main`);

class PageController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
  }

  init() {
    this._cards.forEach((card) => {
      _site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderCard(card, this._container);
    });

    const filters = mainElement.querySelectorAll(`.sort__button`);
    const dataAtributes = [`default`, `by-date`, `by-rating`];

    for (let i = 0; i < filters.length; i++) {
      filters[i].setAttribute(`data-sorting`, dataAtributes[i]);
    }

    mainElement.querySelector(`.sort`).addEventListener(`click`, (evt) => this._onSortingClick(evt));
  }

  _onDataChange(newData, oldData) {
    this._cards[this._cards.findIndex((index) => index === oldData)] = newData;
    this._container.querySelectorAll(`.film-card`).forEach((card) => {
      card.remove();
    });
    this._container.querySelector(`.films-list__show-more`).remove();
  }

  _onSortingClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    this._container.innerHTML = ``;

    if (!evt.target.classList.contains(`sort__button--active`)) {
      let currentFilter = mainElement.querySelector(`.sort__button--active`);
      currentFilter.classList.remove(`sort__button--active`);
      evt.target.classList.add(`sort__button--active`);
    }

    switch (evt.target.dataset.sorting) {
      case `default`:
        const defaultData = _site_data__WEBPACK_IMPORTED_MODULE_0__["films"].slice();
        _site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderData(defaultData, this._container);
        break;
      case `by-date`:
        const sortedByDate = _site_data__WEBPACK_IMPORTED_MODULE_0__["films"].slice().sort((a, b) => b.year - a.year);
        _site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderData(sortedByDate, this._container);
        break;
      case `by-rating`:
        const sortedByRating = _site_data__WEBPACK_IMPORTED_MODULE_0__["films"].slice().sort((a, b) => b.rating - a.rating);
        _site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderData(sortedByRating, this._container);
        break;
    }
  }
}


/***/ }),

/***/ "./src/components/site-search.js":
/*!***************************************!*\
  !*** ./src/components/site-search.js ***!
  \***************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class Search extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
      <form class="header__search search">
        <input type="text" name="search" class="search__field" placeholder="Search movies">
        <svg fill="#7171D8" class="search__film-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
          <path fill-rule="nonzero" d="M2 0v4.524h2.833V0h11.334v4.524H19V0h1v19h-1v-4.524h-2.833V19H4.833v-4.524H2V19H0V0h2zm0 7.238v4.524h2.833V7.238H2zm14.167 0v4.524H19V7.238h-2.833z"/>
        </svg>
        <button type="submit" class="visually-hidden">Search</button>
        <button class="search__reset" type="reset">Reset</button>
      </form>`;
  }
}


/***/ }),

/***/ "./src/components/site-show-more.js":
/*!******************************************!*\
  !*** ./src/components/site-show-more.js ***!
  \******************************************/
/*! exports provided: ShowMoreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMoreButton", function() { return ShowMoreButton; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class ShowMoreButton extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}


/***/ }),

/***/ "./src/components/site-sorting.js":
/*!****************************************!*\
  !*** ./src/components/site-sorting.js ***!
  \****************************************/
/*! exports provided: Sorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorting", function() { return Sorting; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");


class Sorting extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
      <ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
      </ul>`;
  }
}


/***/ }),

/***/ "./src/components/site-statistics.js":
/*!*******************************************!*\
  !*** ./src/components/site-statistics.js ***!
  \*******************************************/
/*! exports provided: Statistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statistics", function() { return Statistics; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");
/* harmony import */ var _site_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-utils */ "./src/components/site-utils.js");



const mainElement = document.querySelector(`.main`);

class Statistics extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
    <section class="statistic">
      <p class="statistic__rank">
        Your rank 
        <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"> 
        <span class="statistic__rank-label">Sci-Fighter</span>
      </p>
    
      <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
        <p class="statistic__filters-description">Show stats:</p>
    
        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
        <label for="statistic-all-time" class="statistic__filters-label">All time</label>
    
        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
        <label for="statistic-today" class="statistic__filters-label">Today</label>
    
        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
        <label for="statistic-week" class="statistic__filters-label">Week</label>
    
        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
        <label for="statistic-month" class="statistic__filters-label">Month</label>
    
        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
        <label for="statistic-year" class="statistic__filters-label">Year</label>
      </form>
    
      <ul class="statistic__text-list">
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">You watched</h4>
          <p class="statistic__item-text">22 <span class="statistic__item-description">movies</span></p>
        </li>
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">Total duration</h4>
          <p class="statistic__item-text">130 <span class="statistic__item-description">h</span> 22 <span class="statistic__item-description">m</span></p>
        </li>
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">Top genre</h4>
          <p class="statistic__item-text">Sci-Fi</p>
        </li>
      </ul>
    
      <div class="statistic__chart-wrap">
        <canvas class="statistic__chart" width="1000"></canvas>
      </div>
    </section>`;
  }

  init() {
    const statsItem = document.querySelector(`.main-navigation__item--additional`);
    const navItems = document.querySelectorAll(`.main-navigation__item`);

    statsItem.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      statsItem.classList.add(`main-navigation__item--active`);
      document.querySelector(`.films`).classList.add(`visually-hidden`);
      document.querySelector(`.sort`).classList.add(`visually-hidden`);
      _site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].render(mainElement, _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"].makeElement(this.getTemplate()), _site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);
    });

    navItems.forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (!item.classList.contains(`main-navigation__item--additional`)) {
          document.querySelector(`.films`).classList.remove(`visually-hidden`);
          document.querySelector(`.sort`).classList.remove(`visually-hidden`);
        }
      });
    });
  }
}


/***/ }),

/***/ "./src/components/site-user-profile.js":
/*!*********************************************!*\
  !*** ./src/components/site-user-profile.js ***!
  \*********************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");
/* harmony import */ var _site_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-data */ "./src/components/site-data.js");



class UserProfile extends _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
  getTemplate() {
    return `
      <section class="header__profile profile">
        <p class="profile__rating">${_site_data__WEBPACK_IMPORTED_MODULE_1__["numberOfSeen"]}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`;
  }
}


/***/ }),

/***/ "./src/components/site-utils.js":
/*!**************************************!*\
  !*** ./src/components/site-utils.js ***!
  \**************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-abstract-component */ "./src/components/site-abstract-component.js");
/* harmony import */ var _site_film_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-film-popup */ "./src/components/site-film-popup.js");
/* harmony import */ var _site_film_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-film-card */ "./src/components/site-film-card.js");




const ESC_KEYCODE = 27;
const body = document.querySelector(`body`);
const mainElement = document.querySelector(`.main`);

const utils = {
  Position: {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
  },

  render: (container, element, place) => {
    switch (place) {
      case utils.Position.AFTERBEGIN:
        container.prepend(element);
        break;
      case utils.Position.BEFOREEND:
        container.append(element);
        break;
    }
  },

  remove: (element) => {
    if (element) {
      element.remove();
    }
  },

  getElementFromClass: (classObject) => {
    return _site_abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"].makeElement(classObject.getTemplate());
  },

  renderElements: (array, container, position) => {
    array.forEach((arrayElement) => {
      utils.render(container, arrayElement, position);
    });
  },

  renderCard: (cardMock, cardContainer) => {
    const card = new _site_film_card__WEBPACK_IMPORTED_MODULE_2__["FilmCard"](cardMock);

    const title = card.getElement().querySelector(`.film-card__title`);
    const posterImage = card.getElement().querySelector(`.film-card img`);
    const commentsCount = card.getElement().querySelector(`.film-card__comments`);

    [title, posterImage, commentsCount].forEach((element) => {
      element.addEventListener(`click`, () => {
        document.querySelector(`.film-details`).classList
          .remove(`visually-hidden`);
      });
      element.style.cursor = `pointer`;
    });

    utils.render(cardContainer, card.getElement(), utils.Position.BEFOREEND);

    const cards = mainElement.querySelectorAll(`.film-card`);

    for (let i = 0; i < cards.length; i++) {
      cards[i].setAttribute(`data-id`, i);
    }
  },

  renderPopup: (popupMock) => {
    const popup = new _site_film_popup__WEBPACK_IMPORTED_MODULE_1__["FilmPopup"](popupMock);

    popup.getElement().classList.add(`visually-hidden`);

    document.addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === ESC_KEYCODE) {
        popup.getElement().classList.add(`visually-hidden`);
      }
    });

    popup.getElement().querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, () => {
        popup.getElement().classList.add(`visually-hidden`);
      });

    utils.render(body, popup.getElement(), utils.Position.BEFOREEND);
  },

  renderData: (data, container) => {
    data.forEach((element) => {
      utils.renderCard(element, container);
    });
  },
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_site_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/site-data */ "./src/components/site-data.js");
/* harmony import */ var _components_site_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/site-utils */ "./src/components/site-utils.js");
/* harmony import */ var _components_site_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/site-search */ "./src/components/site-search.js");
/* harmony import */ var _components_site_sorting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site-sorting */ "./src/components/site-sorting.js");
/* harmony import */ var _components_site_film_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/site-film-card */ "./src/components/site-film-card.js");
/* harmony import */ var _components_site_films_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site-films-top */ "./src/components/site-films-top.js");
/* harmony import */ var _components_site_film_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/site-film-popup */ "./src/components/site-film-popup.js");
/* harmony import */ var _components_site_films_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/site-films-list */ "./src/components/site-films-list.js");
/* harmony import */ var _components_site_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/site-navigation */ "./src/components/site-navigation.js");
/* harmony import */ var _components_site_show_more__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/site-show-more */ "./src/components/site-show-more.js");
/* harmony import */ var _components_site_film_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/site-film-section */ "./src/components/site-film-section.js");
/* harmony import */ var _components_site_user_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site-user-profile */ "./src/components/site-user-profile.js");
/* harmony import */ var _components_site_films_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/site-films-container */ "./src/components/site-films-container.js");
/* harmony import */ var _components_site_films_commented__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/site-films-commented */ "./src/components/site-films-commented.js");
/* harmony import */ var _components_site_films_list_title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/site-films-list-title */ "./src/components/site-films-list-title.js");
/* harmony import */ var _components_site_page_controller__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/site-page-controller */ "./src/components/site-page-controller.js");
/* harmony import */ var _components_site_movie_controller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/site-movie-controller */ "./src/components/site-movie-controller.js");
/* harmony import */ var _components_site_statistics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/site-statistics */ "./src/components/site-statistics.js");





















const NUMBER_OF_FILMS_TO_RENDER = 5;

const elementsIntoHeader = [_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_search__WEBPACK_IMPORTED_MODULE_2__["Search"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_user_profile__WEBPACK_IMPORTED_MODULE_11__["UserProfile"])];
const elementsIntoMain = [_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_navigation__WEBPACK_IMPORTED_MODULE_8__["Navigation"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_sorting__WEBPACK_IMPORTED_MODULE_3__["Sorting"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_film_section__WEBPACK_IMPORTED_MODULE_10__["FilmSection"])];
const elementsIntoFilmsSection = [_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_films_list__WEBPACK_IMPORTED_MODULE_7__["FilmsList"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_films_top__WEBPACK_IMPORTED_MODULE_5__["TopFilms"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_films_commented__WEBPACK_IMPORTED_MODULE_13__["CommentedFilms"])];

const mainElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.header`);
_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderElements(elementsIntoHeader, headerElement, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);
_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderElements(elementsIntoMain, mainElement, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);

const filmsSection = mainElement.querySelector(`.films`);
_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderElements(elementsIntoFilmsSection, filmsSection, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);

const filmsList = filmsSection.querySelector(`.films-list`);
_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].render(filmsList, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_films_list_title__WEBPACK_IMPORTED_MODULE_14__["FilmsListTitle"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);

const upcomingMovies = filmsSection.querySelector(`.films-list__title`);
upcomingMovies.textContent = `All movies. Upcoming`;
upcomingMovies.classList.add(`visually-hidden`);
_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].render(filmsList, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_films_container__WEBPACK_IMPORTED_MODULE_12__["FilmsListContainer"]), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);

const upcomingFilmsContainer = filmsList.querySelector(`.films-list__container`);
const controller = new _components_site_page_controller__WEBPACK_IMPORTED_MODULE_15__["PageController"](upcomingFilmsContainer, _components_site_data__WEBPACK_IMPORTED_MODULE_0__["films"]);
controller.init();

const movieController = new _components_site_movie_controller__WEBPACK_IMPORTED_MODULE_16__["MovieController"](_components_site_data__WEBPACK_IMPORTED_MODULE_0__["films"], controller._onDataChange.bind(controller));
movieController.init();

_components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].render(upcomingFilmsContainer, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_show_more__WEBPACK_IMPORTED_MODULE_9__["ShowMoreButton"]()), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);

const extraFilmsSections = filmsSection.querySelectorAll(`.films-list--extra`);
extraFilmsSections.forEach((section) => {
  _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].render(section, _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].getElementFromClass(new _components_site_films_container__WEBPACK_IMPORTED_MODULE_12__["FilmsListContainer"]()), _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].Position.BEFOREEND);
});

const extraFilmsContainers = filmsSection.querySelectorAll(`.films-list--extra .films-list__container`);
extraFilmsContainers.forEach((container) => {
  const extraData = new Array(extraFilmsContainers.length).fill(``).map(_components_site_data__WEBPACK_IMPORTED_MODULE_0__["getFilmData"]);
  extraData.forEach((data) => {
    _components_site_utils__WEBPACK_IMPORTED_MODULE_1__["utils"].renderCard(data, container);
  });
});

const stats = new _components_site_statistics__WEBPACK_IMPORTED_MODULE_17__["Statistics"]();
stats.init();

const showMoreButton = filmsList.querySelector(`.films-list__show-more`);
let cards = filmsList.querySelectorAll(`.film-card`);
cards.forEach((card) => {
  card.classList.add(`visually-hidden`);
});

let limiter = 0;

const checkForHiddens = () => {
  let isHidden;

  for (let card of cards) {
    isHidden = card.classList.contains(`visually-hidden`);
  }

  return isHidden;
};

const showCards = () => {
  for (let i = 0; i < NUMBER_OF_FILMS_TO_RENDER + limiter; i++) {
    cards[i].classList.remove(`visually-hidden`);
  }

  if (!checkForHiddens()) {
    showMoreButton.classList.add(`visually-hidden`);
  }

  limiter += 5;
};

const onShowMoreClick = () => {
  showCards();
};

const filmsInBase = document.querySelector(`.footer__statistics p`);
filmsInBase.textContent = `${_components_site_data__WEBPACK_IMPORTED_MODULE_0__["films"].length.toString()} movies inside`;

showCards();
showMoreButton.addEventListener(`click`, onShowMoreClick);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map