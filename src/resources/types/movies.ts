type Rating = {
  Soure: string;
  Value: string;
};

export type MovieProps = {
  Genre_id: number;
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Rating[];
  Runtime: string;
};
