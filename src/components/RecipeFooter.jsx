import { Github, Heart } from "lucide-react";

const RecipeFooter = () => {
	return (
		<footer className="bg-muted/30 border-t border-t-gray-200">
			<div className="max-w-7xl mx-auto px-5 py-3">
				<div className="flex flex-row items-start justify-between space-y-4">
					<div className="flex items-center gap-2 text-center">
						<span className="text-foreground/80">Made with</span>
						<Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
						<span className="text-foreground/80">by</span>
						<span className="font-medium text-foreground">Ye Min Aung</span>
					</div>

					<a
						href="https://github.com/mryeminaung"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors text-sm font-medium text-foreground/80 hover:text-foreground border border-border/40 hover:border-border/60 hover:border-orange-400 shadow-sm">
						<Github className="w-4 h-4" />
						<span>Follow on GitHub</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default RecipeFooter;
