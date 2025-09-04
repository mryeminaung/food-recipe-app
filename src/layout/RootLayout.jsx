import { Outlet } from "react-router-dom";
import RecipeNavbar from "@/components/RecipeNavbar";
import RecipeFooter from "@/components/RecipeFooter";
import { RecipeContextProvider } from "@/context/RecipeContext";

const RootLayout = () => {
	return (
		<RecipeContextProvider>
			<div className="flex flex-col min-h-screen">
				<div className="fixed top-0 left-0 w-full z-50">
					<RecipeNavbar />
				</div>

				<main className="flex-grow">
					<Outlet />
				</main>

				<div className="mt-auto">
					<RecipeFooter />
				</div>
			</div>
		</RecipeContextProvider>
	);
};

export default RootLayout;
