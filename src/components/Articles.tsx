// Articles.tsx
import articles from "@/data/articles";
import { FaClock } from "react-icons/fa6";

export default function Article() {
	return (
		<>
			{articles.map((article, index) => (
				<div
					key={index}
					className="w-full bg-[#252e43] rounded-xl p-4">
					<div className="h-[200px] sm:h-[250px] md:h-[300px] rounded-xl">
						<img
							className="w-full h-full object-cover rounded-xl"
							src={article.img}
							alt={article.title}
						/>
					</div>
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-4">
						<span className="text-white/50 flex items-center gap-2 text-sm md:text-base">
							<FaClock /> {article.time} min{article.time > 1 ? "s" : ""} read
						</span>
						<button className="rounded-xl p-2 md:p-3 border border-white text-sm md:text-base">
							{article.title}
						</button>
					</div>
					<p className="mt-2 text-sm md:text-base">{article.description}</p>
				</div>
			))}
		</>
	);
}
