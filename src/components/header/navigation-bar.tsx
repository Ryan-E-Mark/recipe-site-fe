export const NavigationBar = () => {
    return (
        <div className="flex px-8 gap-8 content-center font-bold">
            <a className="hover:text-gray-500 w-min" href="/">HOME</a>
            <a className="hover:text-gray-500" href='/recipe-by-ingredient'>SEARCH BY INGREDIENTS</a>
            <a className="hover:text-gray-500" href='/random-recipe'>TRY A RANDOM RECIPE</a>
        </div>
    )
}