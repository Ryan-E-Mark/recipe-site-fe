const mockData = [
    {
        title: 'Chicken Rigis',
        description: 'Delicious chicken and pasta.',
        url: '',
    },
    {
        title: 'Green Curry',
        description: 'Rich thai green curry.',
        url: '',
    },
    {
        title: 'Vegetable Stew',
        description: 'Healthy and hardy stew, great for the winter',
        url: '',
    },
    {
        title: 'Banana Bread',
        description: 'Fluffy banana bread with hints of cinnamon and brown sugar',
        url: '',
    },
]

export const RecipeList = () => {
    return (
        <div
            className="w-40 flex flex-wrap flex-col justify-center content-center"
        >
            {mockData.map(recipe => {
                return (
                    <div className="py-4">
                    <img alt="recipe-thumbnail" src={recipe.url}/>
                    <h3 className=""><span className="font-bold">Recipe:</span> {recipe.title}</h3>
                    <p><span className="font-bold">Description:</span> {recipe.description}</p>
                    </div>
                )
            })}
        </div>
    )
}