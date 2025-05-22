import "./css/App.css"
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </MovieProvider>
    </>
  );
}
export default App;
