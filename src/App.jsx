import MovieCard from "./components/MovieCard"

function App() {

  return (
    <>
    <MovieCard movie={{title: "Joe's film", release_date: "2025"}}/>
    <MovieCard movie={{title: "Moe's film", release_date: "2024"}}/>
    <MovieCard movie={{title: "Boe's film", release_date: "2026"}}/>
    <MovieCard movie={{title: "Tim's film", release_date: "2024"}}/>
   </>
  )
}
export default App