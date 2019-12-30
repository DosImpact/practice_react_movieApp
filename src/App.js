import React from "react";
import Axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await Axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState(cs => ({ isLoading: false, movies }));
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    return this.state.isLoading ? (
      "Loading..."
    ) : (
      <div className="screen">
        {this.state.movies.map(e => {
          return (
            <Movie
              id={e.id}
              key={e.id}
              url={e.url}
              title={e.title}
              year={e.year}
              rating={e.rating}
              image={e.medium_cover_image}
              summary={e.summary}
              genres={e.genres}
            ></Movie>
          );
        })}
      </div>
    );
  }
}
export default App;
