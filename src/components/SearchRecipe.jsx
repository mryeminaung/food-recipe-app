import { useRecipeContext } from "@/context/RecipeContext";

const SearchRecipe = () => {
	const { handleSearch, search, setSearch } = useRecipeContext();

	return (
		<form
			className="max-w-md mx-auto my-8 border-none"
			onSubmit={handleSearch}
			autoComplete="off">
			<label
				htmlFor="search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					name="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="block w-full p-3 ps-10 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
					placeholder="Search recipe..."
					required=""
				/>
			</div>
		</form>
	);
};

export default SearchRecipe;
