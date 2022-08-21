// Route 
import { Route } from "react-router-dom";

// Axios
import axios from "axios";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import PlaysHOC from "./HOC/Plays.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components 
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";

// Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY; 

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component = {MoviePage} />
      <PlaysHOC path="/plays" exact component = {PlaysPage} />
    </>
  );
}

export default App;

