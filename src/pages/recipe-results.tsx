import { RecipeList } from "../components/recipe-list/recipe-list"

export const RecipeResults = () => {
    return (
        <div className="flex flex-col flex-wraps justify-center">
            <RecipeList />
            <a href="https://www.flaticon.com/free-icons/calories" title="calories icons" className="text-xs">Calories icons created by Nadiinko - Flaticon</a>
        </div>
    )
}