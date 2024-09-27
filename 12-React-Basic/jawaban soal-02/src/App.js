import { Component } from "react";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList : [],
      isLoading : true
    };
  }

  async fetchMovieList() {
    const response = await fetch("https://api.jikan.moe/v3/top/anime");
    const result = await response.json();
    this.setState ({
      movieList : result.top
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchMovieList();
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movieList !== this.state.movieList) {
      this.setState({isLoading : false});
    }
  }

  render() {
    return (
        <div className="container my-5">
          <h1 className="text-center">Anime List</h1>
          <div className="container my-5">
            <div className="row" id="daftar-anime"> 
            { this.state.isLoading 
            ? (<h2>Loading...</h2>)
            : (this.state.movieList.map (
                (movie) => (<MovieCard key={movie.mal_id} movie={movie} />)              
            ))
            }
            </div>
          </div>
        </div>
    );
  }
}

export default App;