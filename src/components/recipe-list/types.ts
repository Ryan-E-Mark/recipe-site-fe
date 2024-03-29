export type SearchResults = {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number
  glutenFree: boolean
  vegan: boolean
  vegetarian: boolean
  dairyFree: boolean
}[];

export type SearchFilters = {
  cuisine: string[];
  diet: string[];
  intolerances: string[];
};

export type CUISINE_FILTERS_TYPE = {
  African: string
  Chinese: string
  Japanese: string
  Korean: string
  Vietnamese: string
  Thai: string
  Indian: string
  British: string
  Irish: string
  French: string
  Italian: string
  Mexican: string
  Spanish: string
  Middle_Eastern: string
  Jewish: string
  American: string
  Cajun: string
  Southern: string
  Greek: string
  German: string
  Nordic: string
  Eastern_European: string
  Caribbean: string
  Latin_American: string
};

export type DIET_FILTERS_TYPE = {
  Pescetarian: string
  Vegan: string
  Vegetarian: string
  Paleo: string
  Primal: string
};

export type INTOLERANCES_FILTERS_TYPE = {
  Dairy: string
  Egg: string
  Gluten: string
  Peanut: string
  Sesame: string
  Seafood: string
  Shellfish: string
  Soy: string
  Sulfite: string
  TreeNut: string
  Wheat: string
};

