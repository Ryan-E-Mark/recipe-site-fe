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
        <button onClick={handlePrevious} disabled={page === 0 ? true : false}>Previous</button>
        <button onClick={handleNext}>Next</button>
        </div>
    )
}