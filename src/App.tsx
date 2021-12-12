import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

import { useMovie } from "./hooks/useMovie";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const { movies, genres, selectedGenre, selectedGenreId, onSelectedGenre } =
    useMovie();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar
        genres={genres}
        onSelectedGenre={onSelectedGenre}
        selectedGenreId={selectedGenreId}
      />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}

