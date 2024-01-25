export type SearchResults = {
  id: number;
  image: string;
  title: string;
  nutrition: { nutrients: { name: string; amount: number; unit: string }[] };
}[];

export type SearchFilters = {
  cuisine: string[];
  diet: string[];
  intolerances: string[];
};


