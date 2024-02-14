import { useState } from "react"
import { RecipeList } from "../components/recipe-list/recipe-list"
import { ResultsPagePagination } from "../components/recipe-list/results-page-pagination"
import { SearchResults } from "../components/recipe-list/types"

export const RecipeResults = () => {
    const [searchResults, setSearchResults] = useState<SearchResults>([])
    const [resultsOffset, setResultsOffset] = useState<number>(0)
    
    return (
        <div className="flex flex-col flex-wrap justify-between content-center">
            <RecipeList searchResults={searchResults} setSearchResults={setSearchResults} resultsOffset={resultsOffset} />
            <ResultsPagePagination handlePagination={setResultsOffset} />
            <a href="https://www.flaticon.com/free-icons/clock" title="clock icons">Clock icons created by dmitri13 - Flaticon</a>
        </div>
    )
}