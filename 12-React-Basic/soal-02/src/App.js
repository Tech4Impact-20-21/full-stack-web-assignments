import { Component } from "react";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props){
    super();
    this.state = {
      movieList : [],
      isLoading : true
    };
    this.fetchMovieList = this.fetchMovieList.bind(this);
  }

  async fetchMovieList(){
    try{
      const getMovieList = await fetch("https://api.jikan.moe/v3/top/anime");
      const MovieList = await getMovieList.json();
      await this.setState({
        movieList : MovieList.top
      })
    } catch(error){
      console.log('fetchMovieList', error);
    }
  }

  componentDidMount(){
    this.fetchMovieList();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.movieList !== prevState.movieList){
      this.setState({
        isLoading : false
      })
    } 
  }
  render() {
    if(this.state.isLoading === false){
      return (
        <div className="container my-5">
          <h1 className="text-center">Anime List</h1>
          <div className="container my-5">
            <div id="daftar-anime" className="row">
              {this.state.movieList.map(function(movie){
                return(
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={movie.mal_id}>
                    <MovieCard movie={movie}></MovieCard>
                  </div>
                ) 
              }
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading ...</h2>
    }
    
  }
}

export default App;