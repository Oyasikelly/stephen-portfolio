export default function FavouriteTools() {
	return (
		<section className="py-8 md:py-16">
			<div className="h-[2px] bg-gradient-to-r from-black via-[#ffffffb4] to-black"></div>

			<div className="max-w-7xl mx-auto py-10 md:py-20 px-4 sm:px-6">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
					Favourite Tools
				</h2>
				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
					{[
						{ icon: "/Favourite_tools/figma.png" },
						{ icon: "/Favourite_tools/nuxtjs.png" },
						{ icon: "/Favourite_tools/nodejs.png" },
						{ icon: "/Favourite_tools/nextjs.png" },
						{ icon: "/Favourite_tools/aws.png" },
						{ icon: "/Favourite_tools/reactjs.png" },
						{ icon: "/Favourite_tools/typescript.png" },
						{ icon: "/Favourite_tools/vue.png" },
					].map((tool, index) => (
						<div
							key={1 + index}
							className="text-center flex-shrink-0 lg:w-16 lg:h-16 w-12 h-12">
							<img
								src={`/assets/${tool.icon}`}
								alt={tool.icon.split("/").pop()?.split(".")[0] || "Tool Icon"}
								loading="lazy"
								className="w-full h-full object-contain"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="h-[2px] bg-gradient-to-r from-black via-[#ffffffb4] to-black"></div>
		</section>
	);
}
