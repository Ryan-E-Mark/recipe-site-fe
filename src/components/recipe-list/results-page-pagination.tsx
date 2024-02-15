import { FC } from "react"
import { RESULTS_PER_PAGE } from "./recipe-list"
import { MAX_NUMBER_OF_RESULTS } from "../../pages/recipe-results"

interface ResultsPagePaginationProps {
    page: number
    resultsTotal: number
    setPage: (page: number) => void
}

export const ResultsPagePagination: FC<ResultsPagePaginationProps> = ({ page, resultsTotal, setPage }) => {
    const pages = []
    
    for (let i = 1; i < Math.ceil(MAX_NUMBER_OF_RESULTS/RESULTS_PER_PAGE); i++) {
        pages.push(i)
    }

    const handlePrevious = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }
    
    return (
        <div className="flex w-1/4 justify-between">
        <button className={`${page === 1 ? 'bg-gray-300 opacity-50' : 'border-2 border-lime-200 hover:bg-lime-200'} px-4 py-2 rounded-md w-24`} onClick={handlePrevious} disabled={page === 1 ? true : false}>Previous</button>
            {pages.map(page => {
                return (
                    <button key={page} onClick={() => setPage(page)}>{page}</button>
                )
            })}
        <button className='px-4 py-2 rounded-md border-2 border-lime-200 hover:bg-lime-200 active:bg-lime-400 active:border-lime-400 w-24' onClick={handleNext}>Next</button>
        </div>
    )
}