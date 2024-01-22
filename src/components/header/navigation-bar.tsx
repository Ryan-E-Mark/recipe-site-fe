export const NavigationBar = () => {
    return (
        <div className="container grid grid-cols-3 gap-8 content-center px-8 font-bold">
            <a className="hover:text-gray-500" href="/">HOME</a>
            <a className="hover:text-gray-500" href='/recipe-by-ingredient'>SEARCH BY INGREDIENTS</a>
            <a className="hover:text-gray-500" href='/random-recipe'>TRY A RANDOM RECIPE</a>
        </div>
    )
}