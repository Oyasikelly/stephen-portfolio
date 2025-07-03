import NextProjects from "@/ArticlePages/NextProjects";
import AnyArticle from "../components/AnyArticle";
import HeadingDetails from "@/components/HeadingDetails";

interface ArticleProps {
	id: string;
	title: string;
	link: string;
	content: string[];
	sections: { id: string; title: string }[];
}

export default function MasteringCssGrid({ content, sections }: ArticleProps) {
	console.log(content, sections);

	return (
		<>
			{/* <HeadingDetails /> */}

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
