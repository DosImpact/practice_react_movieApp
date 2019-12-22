import React from "react";
import axios from "axios";
import Movie from "./Movie.js";
import "./App.css";

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState(current => ({ movies, isLoading: false }));
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const isLoading = this.state.isLoading;
    const movies = this.state.movies;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <div className="loader__text">Loading...</div>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
