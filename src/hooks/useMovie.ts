import { useState, useEffect } from "react";

import { GenreProps, MovieProps } from "../resources/types";

import { api } from "../services/api";

export const useMovie = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>(
    {} as GenreProps
  );

  useEffect(() => {
    api.get<GenreProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api.get<GenreProps>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  function onSelectedGenre(id: number) {
    setSelectedGenreId(id);
  }

  return {
    movies,
    genres,
    selectedGenre,
    onSelectedGenre,
    selectedGenreId,
  };
};
