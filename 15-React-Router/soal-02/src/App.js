import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/movies/:id" exact component={Movie} />
            <Route path="/movies" exact component={MovieList} />
            <Route path="/" exact component={Home} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
