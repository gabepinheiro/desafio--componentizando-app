export type GenreName =
  | "action"
  | "comedy"
  | "documentary"
  | "drama"
  | "horror"
  | "family";

export type GenreProps = {
  id: number;
  name: GenreName;
  title: string;
};
