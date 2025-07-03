import AnyArticle from "../components/AnyArticle";

interface ArticleProps {
	id: string;
	title: string;
	link: string;
	content: string[];
	sections: { id: string; title: string }[];
}

export default function SeoInModernWeb({ content, sections }: ArticleProps) {
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
