import NextProjects from "@/ArticlePages/NextProjects";
import AnyPortfolio from "../components/AnyPortfolio";

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
