import NextProjects from "@/components/NextProjects";
import AnyPortfolio from "./AnyPortfolio";

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

export default function Datkey({ content, sections }: PorfolioProps) {
	return (
		<>
			<AnyPortfolio
				link={""}
				id={""}
				content={content}
				sections={sections}
			/>
		</>
	);
}
