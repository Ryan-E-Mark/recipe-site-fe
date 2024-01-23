export type SearchResults = {
    id: number;
    image: string;
    title: string;
    nutrition: { nutrients: { name: string; amount: number; unit: string }[] };
  }[];
  
  export type SearchFilters = {
    cuisine: {
        isDropdownActive: boolean
        filterValues: string[]
    }
    diet: {
        isDropdownActive: boolean
        filterValues: string[]
    }
    intolerances: {
        isDropdownActive: boolean
        filterValues: string[]
    }
  }