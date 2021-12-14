import { useState, useEffect } from "react";

import { GenreProps, MovieProps } from "../resources/types";

import { api } from "../services/api";

export const useMovie = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<GenreProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies`).then((response) => {
      setMovies(response.data);
    });
  }, []);

  function onSelectedGenre(id: number) {
    setGenres((genres) =>
      genres.map((genre) => ({
        ...genre,
        selected: genre.id === id,
      }))
    );
  }

  function moviesGenreSelected(movies: MovieProps[]) {
    const genreSelected = genres.find((genre) => genre.selected);

    if (!genreSelected) {
      return;
    }

    return movies.filter((movie) => movie.Genre_id === genreSelected.id);
  }

  return {
    movies,
    genres,
    onSelectedGenre,
    moviesGenreSelected,
  };
};
