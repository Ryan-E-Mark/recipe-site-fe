export const NavigationBar = () => {
    return (
        <div className="flex md:px-8 px-2 gap-4 justify-between md:justify-center md:gap-8 content-center font-bold text-xs md:text-md">
            <a className="hover:text-gray-500 w-auto" href="/">HOME</a>
            <a className="hover:text-gray-500 w-auto" href='/recipe-by-ingredient'>SEARCH BY INGREDIENTS</a>
            <a className="hover:text-gray-500 w-auto" href='/random-recipe'>TRY A RANDOM RECIPE</a>
        </div>
    )
}