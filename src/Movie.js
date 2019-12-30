import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

function Movie({ id, url, title, year, rating, image, summary, genres }) {
  return (
    <div className="movie">
      <img className="movie__image" src={image} title={title} alt={title}></img>
      <div className="movie__detail">
        <div className="movie__title">{title}</div>
        <a className="movie__url" href={url}>
          {url}
        </a>
        <div className="movie__year">{year}</div>
        <div className="movie__rating">{rating}</div>
        <ul className="movie__genres">
          {genres.map((e, index) => (
            <li key={index}> {e}</li>
          ))}
        </ul>
        <div className="movie__summary">{summary.slice(0, 1220)}</div>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
