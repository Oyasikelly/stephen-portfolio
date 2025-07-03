// import portfolioPreviews from "@/data/FeaturedProjects";
import PopInOnScroll from "@/components/PopInOnScroll";

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
					<PopInOnScroll
						as="h2"
						className="text-xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2"
						delay={index * 0.25}
						duration={1.2}
						ease={[0.16, 1, 0.3, 1]}>
						{section.title}
					</PopInOnScroll>
					{content[index] && (
						<PopInOnScroll
							as="p"
							className="py-4 text-[12px] md:text-base text-white/60"
							delay={index * 0.25 + 0.15}
							duration={1.2}
							ease={[0.16, 1, 0.3, 1]}>
							{content[index]}
						</PopInOnScroll>
					)}
				</section>
			))}

			<section
				id="hobbies"
				className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<PopInOnScroll
					as="h2"
					className="text-[14px] md:text-xl font-bold border-b-2 border-[#252e43] pb-2"
					delay={sections.length * 0.25}
					duration={1.2}
					ease={[0.16, 1, 0.3, 1]}>
					NEXT PROJECTS
				</PopInOnScroll>
			</section>
		</>
	);
}
