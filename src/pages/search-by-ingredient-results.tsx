import { FC } from "react"
import { useLocation } from "react-router-dom";

export const SearchByIngredientResults: FC = () => {
    const ingredient = useLocation().state.ingredient;

    return (
        <div>

        </div>
    )
}