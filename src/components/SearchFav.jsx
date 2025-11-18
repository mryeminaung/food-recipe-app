import { ArrowDownUp, Heart, Search } from "lucide-react";
import React from "react";

const SearchFav = ({ setQuery }) => {
	return (
		<section className="bg-gradient-to-b pt-28 pb-20 from-orange-50 to-orange-100 text-center px-5">
			<div className="flex justify-center mb-6">
				<div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-600">
					<Heart className="w-7 h-7 text-white" />
				</div>
			</div>

			<h1 className="text-3xl md:text-5xl font-bold text-gray-900">
				My Favorite Recipes
			</h1>

			<p className="mt-3 text-gray-600 max-w-xl mx-auto">
				Your carefully curated collection of beloved recipes. Keep all your
				go-to dishes in one place for easy access.
			</p>

			<div className="mt-8 flex justify-center">
				<div className="flex w-full gap-x-4 max-w-xl">
					<div className="relative flex-grow">
						<span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
							<Search size={18} />
						</span>
						<input
							type="text"
							onChange={(e) => setQuery(e.target.value.toLowerCase())}
							placeholder="Search your favorite recipes..."
							className="w-full pl-10 pr-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
						/>
					</div>

					<button className="hidden items-center gap-2 px-4 py-3 rounded-lg border bg-white border-gray-300 hover:bg-gray-50">
						<ArrowDownUp size={18} />
						<span className="text-sm font-medium">Sort</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default SearchFav;
