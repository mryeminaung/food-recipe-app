const Instructions = ({ ingredients }) => {
	return (
		<div>
			<h3 className="text-2xl mb-3 font-semibold">Ingredients</h3>
			{ingredients.map((item) => (
				<li
					key={item}
					className="flex items-center gap-3 mb-3">
					<div className="flex-shrink-0 w-2 h-2 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-sm"></div>
					<p className="text-gray-700">{item}</p>
				</li>
			))}
		</div>
	);
};

export default Instructions;
