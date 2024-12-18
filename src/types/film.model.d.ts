declare type FilmModel = {
  title: string;
  coverSrc?: string;
  year: string;
};

declare type FilmFullModel = {
  title: string;
  coverSrc?: string;
  facts: string[];
  director: string;
  year: string;
  quote: string;
};
