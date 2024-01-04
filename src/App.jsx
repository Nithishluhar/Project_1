// import "./App.css";
import GenreMovieList from "./Components/GenreMovieList";
import Header from "./Components/Header";
import ProdectionHoues from "./Components/ProdectionHoues";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Slider />
        <ProdectionHoues />
        <GenreMovieList/>
      </div>
    </>
  );
}

export default App;
