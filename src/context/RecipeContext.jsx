import axios from "axios";
import {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
} from "react";
import { useSearchParams } from "react-router-dom";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
	const [favRecipes, setFavRecipes] = useState(() => {
		return JSON.parse(localStorage.getItem("favRecipes")) ?? [];
	});
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get("type");

	const updateFilter = (key, value) => {
		setSearchParams((prevParams) => {
			if (!value) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	};

	const fetchRecipes = useCallback(async (query) => {
		setLoading(true);
		setError(null);
		try {
			const res = await axios.get(
				`https://forkify-api.herokuapp.com/api/search?q=${query || "pizza"}`,
			);
			setRecipes(res.data.recipes || []);
		} catch (err) {
			setError("Failed to fetch recipes. Please try again.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchRecipes(typeFilter);
	}, [fetchRecipes, typeFilter]);

	const handleSearch = (e) => {
		e.preventDefault();
		fetchRecipes(search);
		updateFilter("type", search || null);
	};

	useEffect(() => {
		localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
	}, [favRecipes]);

	return (
		<RecipeContext.Provider
			value={{
				recipes,
				setRecipes,
				search,
				setSearch,
				handleSearch,
				favRecipes,
				setFavRecipes,
				loading,
				error,
			}}>
			{children}
		</RecipeContext.Provider>
	);
};

export const useRecipeContext = () => useContext(RecipeContext);

export default RecipeContext;
