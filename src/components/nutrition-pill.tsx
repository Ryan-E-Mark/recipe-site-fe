import { FC } from "react"

interface NutritionPillProps {
    glutenFree: boolean
    vegan: boolean
    vegetarian: boolean
    dairyFree: boolean
}

export const NutritionPill: FC<NutritionPillProps> = ({ glutenFree, vegan, vegetarian, dairyFree }) => {
    let nutritionLabels = []

    if (glutenFree) {
        nutritionLabels.push('Gluten Free')
    }
    if (vegan) {
        nutritionLabels.push('Vegan')
    }
    if (vegetarian) {
        nutritionLabels.push('Vegetarian')
    }
    if (dairyFree) {
        nutritionLabels.push('Dairy Free')
    }

    return (
        <div className="absolute z-10">
        {nutritionLabels.map(label => {
            return (
                <div className="rounded-lg background-gray-50">
                    <p>{label}</p>
                </div>
            )
        })}
        </div>
    )
}