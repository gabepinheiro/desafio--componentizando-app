import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

import { useMovie } from "./hooks/useMovie";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const { movies, genres, onSelectedGenre, moviesGenreSelected } = useMovie();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar genres={genres} onSelectedGenre={onSelectedGenre} />
      <Content
        movies={moviesGenreSelected(movies)}
        selectedGenre={genres.find((genre) => genre.selected)}
      />
    </div>
  );
}
