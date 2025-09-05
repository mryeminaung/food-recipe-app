import { useEffect, useState } from "react";
import { useRecipeContext } from "@/context/RecipeContext";
import { queries } from "../libs/utils";
import { useNavigate } from "react-router-dom";

const SearchRecipe = () => {
	const { handleSearch, search, setSearch } = useRecipeContext();
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const value = e.target.value;
		setSearch(value);

		if (value.length > 0) {
			const filtered = queries.filter((q) =>
				q.toLowerCase().includes(value.toLowerCase()),
			);
			setSuggestions(filtered.slice(0, 8));
		} else {
			setSuggestions([]);
		}
	};

	const handleSelect = (query) => {
		setSearch(query);
		setSuggestions([]);
	};

	useEffect(() => {
		if (search) navigate(`/recipes/?type=${search}`);
		else navigate("/recipes");
	}, [search]);

	return (
		<form
			className="max-w-lg mx-auto my-8 border-none relative"
			onSubmit={handleSearch}
			autoComplete="off">
			<div className="flex items-center gap-x-3">
				<div className="relative w-full">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500"
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
						onChange={handleChange}
						className="block w-full p-3 ps-10 text-sm rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
						placeholder="Search recipe..."
					/>

					{suggestions.length > 0 && (
						<ul className="absolute z-10 w-full bg-white rounded-lg shadow-sm mt-3 max-h-60 overflow-y-auto shadow-orange-400">
							{suggestions.map((s, i) => (
								<li
									key={i}
									onClick={() => handleSelect(s)}
									className="p-2 cursor-pointer hover:bg-gray-100">
									{s}
								</li>
							))}
						</ul>
					)}
				</div>

				<button className="flex hover:cursor-pointer items-center gap-2 px-8 py-3 text-white rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-500 hover:to-orange-700">
					<span className="text-sm font-medium">Search</span>
				</button>
			</div>
		</form>
	);
};

export default SearchRecipe;
