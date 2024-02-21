import { FC } from "react"
import { RESULTS_PER_PAGE } from "./recipe-list"

interface ResultsPagePaginationProps {
    activePage: number
    resultsTotal: number
    setPage: (page: number) => void
}

export const ResultsPagePagination: FC<ResultsPagePaginationProps> = ({ activePage, resultsTotal, setPage }) => {
    const pages = []
    
    for (let i = 1; i <= Math.ceil(resultsTotal/RESULTS_PER_PAGE); i++) {
        pages.push(i)
    }

    const handlePrevious = () => {
        setPage(activePage - 1)
    }

    const handleNext = () => {
        setPage(activePage + 1)
    }
    
    return (
        <div className="flex flex-wrap w-1/3 justify-between items-center">
        <button className={`${activePage === 1 ? 'bg-gray-300 opacity-50' : 'border-2 border-lime-200 hover:bg-lime-200'} px-4 py-2 rounded-md w-24`} onClick={handlePrevious} disabled={activePage === 1 ? true : false}>Previous</button>
            {pages.map(pageNumber => {
                return (
                    <button key={pageNumber} className={`${activePage === pageNumber ? 'bg-lime-200 rounded-full' : ''} h-6 w-6`} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
                )
            })}
        <button className={`${activePage === pages.length ? 'bg-gray-300 opacity-50' : 'border-2 border-lime-200 hover:bg-lime-200'} px-4 py-2 rounded-md w-24`} onClick={handleNext} disabled={activePage === pages.length ? true : false}>Next</button>
        </div>
    )
}