import { FC, useState } from "react"

interface ResultsPagePaginationProps {
    handlePagination: (offset: number) => void
}

export const ResultsPagePagination: FC<ResultsPagePaginationProps> = ({ handlePagination }) => {
    const [page, setPage] = useState<number>(0)

    const handlePrevious = () => {
        setPage(page - 1)

        handlePagination(12 * page)
    }

    const handleNext = () => {
        setPage(page + 1)

        handlePagination(12 * page)
    }
    
    return (
        <div className="flex w-1/4 justify-between">
        <button className={`${page === 0 ? 'bg-gray-300 opacity-50' : 'border-2 border-lime-200 hover:bg-lime-200'} px-4 py-2 rounded-md`} onClick={handlePrevious} disabled={page === 0 ? true : false}>Previous</button>
        <button className='px-4 py-2 rounded-md border-2 border-lime-200 hover:bg-lime-200 active:bg-lime-400 active:border-lime-400' onClick={handleNext}>Next</button>
        </div>
    )
}