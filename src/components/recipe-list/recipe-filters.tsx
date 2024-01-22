export const RecipeFilters = () => {
    return (
        <div className="border-2 border-lime-200 rounded-md flex flex-col items-center">
            <h3>Filter your results</h3>
            <div className="flex gap-x-4">
            <p>Cuisine</p>
            <p>Diet</p>
            <p>Intolerances</p>
            </div>
            <button>Apply</button>
        </div>
    )
}