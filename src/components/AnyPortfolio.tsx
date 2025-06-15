import NextProjects from "@/components/NextProjects";
import portfolioPreviews from "@/data/portfolioPreviews";

interface Section {
	id: string;
	title: string;
}

interface PorfolioProps {
	link: string;
	id: string;
	content: string[];
	sections: Section[];
}

export default function AnyPortfolio({ content, sections }: PorfolioProps) {
	return (
		<>
			{sections.map((section, index) => (
				<section
					key={section.id}
					id={section.id}
					className={`mt-8 md:mt-10 max-w-4xl mx-auto ${
						index === 0 ? "mt-0" : ""
					}`}>
					<h2 className="text-xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
						{section.title}
					</h2>
					{content[index] && (
						<p className="py-4 text-[12px] md:text-base text-white/60">
							{content[index]}
						</p>
					)}
				</section>
			))}

			<section
				id="hobbies"
				className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<h2 className="text-[14px] md:text-xl font-bold border-b-2 border-[#252e43] pb-2">
					NEXT PROJECTS
				</h2>
				<NextProjects />
			</section>
		</>
	);
}
