import NextProjects from "@/components/NextProjects";
import PopInOnScroll from "@/components/PopInOnScroll";

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
					<PopInOnScroll
						as="h2"
						className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
						{section.title}
					</PopInOnScroll>
					<PopInOnScroll
						as="p"
						className="py-4 text-base md:text-lg text-white/60">
						{content[i]?.includes("$40 billion USD")
							? content[i].split(/(\$40 billion USD)/g).map((part, index) =>
									part === "$40 billion USD" ? (
										<span
											key={index}
											style={{ color: "#ffffff", fontWeight: "bold" }}>
											{part}
										</span>
									) : (
										part
									)
							  )
							: content[i]}
					</PopInOnScroll>
				</section>
			))}

			{/* Optional Section for Next Projects */}
			<section className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<PopInOnScroll
					as="h2"
					className="text-md md:text-xl font-bold border-b-2 border-[#252e43] pb-2">
					NEXT PROJECTS
				</PopInOnScroll>
				<NextProjects />
			</section>
		</>
	);
}
