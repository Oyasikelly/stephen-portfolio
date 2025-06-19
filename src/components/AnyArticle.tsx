import NextProjects from "@/components/NextProjects";

interface ArticleProps {
	id: string;
	title: string;
	link: string;
	content: string[];
	sections: { id: string; title: string }[];
}

export default function AnyArticle({ content, sections }: ArticleProps) {
	return (
		<>
			{sections.map((section, i) => (
				<section
					key={section.id}
					id={section.id}
					className="max-w-4xl mx-auto mt-10">
					<h2 className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
						{section.title}
					</h2>
					<p className="py-4 text-base md:text-lg text-white/60">
						{content[i]?.includes("$40 billion USD") ? (
							<ul>
								<li className="flex gap-1 items-center text-[11px] md:text-base">
									<h3 className="font-semibold">Valuation</h3> -
									<span className="text-white/60">{content[i]}</span>
								</li>
							</ul>
						) : (
							<p className="py-4 text-base md:text-lg text-white/60">
								{content[i]}
							</p>
						)}
					</p>
				</section>
			))}

			{/* Optional Section for Next Projects */}
			<section
				id="hobbies"
				className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<h2 className="text-md md:text-xl font-bold border-b-2 border-[#252e43] pb-2">
					NEXT PROJECTS
				</h2>
				<NextProjects />
			</section>
		</>
	);
}
