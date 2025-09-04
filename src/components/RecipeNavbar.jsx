import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Home, BookOpen, Heart, Menu, X } from "lucide-react";
import logo from "../assets/favicon.png";

const RecipeNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		{ name: "Home", icon: <Home size={18} />, path: "/" },
		{ name: "Recipes", icon: <BookOpen size={18} />, path: "/recipes" },
		{
			name: "Favorites",
			icon: <Heart size={18} />,
			path: "/recipes/favourites",
			badge: 3,
		},
	];

	// Function to check active state manually
	const isNavItemActive = (itemPath) => {
		if (itemPath === "/") {
			return location.pathname === "/";
		}
		if (itemPath === "/recipes") {
			return (
				location.pathname.startsWith("/recipes") &&
				!location.pathname.startsWith("/recipes/favourites")
			);
		}
		if (itemPath === "/recipes/favourites") {
			return location.pathname.startsWith("/recipes/favourites");
		}
		return location.pathname.startsWith(itemPath);
	};

	return (
		<nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<Link to="/">
					<div className="flex items-center space-x-2">
						<img
							src={logo}
							className="w-8 h-8"
							alt="Logo"
						/>
						<span className="text-lg font-bold text-gray-800">
							Recipe Browser
						</span>
					</div>
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center space-x-2 font-medium">
					{navItems.map((item) => {
						const active = isNavItemActive(item.path);
						return (
							<li key={item.name}>
								<NavLink
									to={item.path}
									className={`relative flex items-center gap-1 px-3 py-1.5 rounded-lg transition ${
										active
											? "bg-gradient-to-r from-orange-500 to-orange-400 text-white"
											: "text-gray-700 hover:bg-orange-100"
									}`}>
									{item.icon}
									{item.name}
									{item.badge && (
										<span className="ml-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
											{item.badge}
										</span>
									)}
								</NavLink>
							</li>
						);
					})}
				</ul>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden text-gray-700"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={26} /> : <Menu size={26} />}
				</button>
			</div>

			{/* Mobile Dropdown */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-2">
					{navItems.map((item) => {
						const active = isNavItemActive(item.path);
						return (
							<NavLink
								key={item.name}
								to={item.path}
								onClick={() => setIsOpen(false)}
								className={`relative flex items-center gap-2 px-3 py-2 rounded-md transition ${
									active
										? "bg-gradient-to-r from-orange-500 to-orange-400 text-white"
										: "text-gray-700 hover:bg-orange-100"
								}`}>
								{item.icon}
								{item.name}
								{item.badge && (
									<span className="absolute left-24 -top-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
										{item.badge}
									</span>
								)}
							</NavLink>
						);
					})}
				</div>
			)}
		</nav>
	);
};

export default RecipeNavbar;
