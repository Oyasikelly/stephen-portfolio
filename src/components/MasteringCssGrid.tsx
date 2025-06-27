import NextProjects from "@/components/NextProjects";
import AnyArticle from "./AnyArticle";

interface ArticleProps {
	id: string;
	title: string;
	link: string;
	content: string[];
	sections: { id: string; title: string }[];
}

export default function MasteringCssGrid({ content, sections }: ArticleProps) {
	return (
		<>
			<AnyArticle
				id={""}
				title={""}
				link={""}
				content={content}
				sections={sections}
			/>
		</>
	);
}
