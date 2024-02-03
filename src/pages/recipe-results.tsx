import { useState } from "react"
import { RecipeList } from "../components/recipe-list/recipe-list"
import { ResultsPagePagination } from "../components/recipe-list/results-page-pagination"

export const RecipeResults = () => {
    const [offset, setOffset] = useState<number>(0)
    
    return (
        <div className="flex flex-col flex-wraps justify-between">
            <RecipeList offset={offset}/>
            <ResultsPagePagination handlePagination={setOffset} />
            <a href="https://www.flaticon.com/free-icons/clock" title="clock icons">Clock icons created by dmitri13 - Flaticon</a>
        </div>
    )
}