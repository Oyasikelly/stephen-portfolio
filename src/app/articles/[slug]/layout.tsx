import { Metadata } from "next";
import ArticlesData from "@/data/articles.json";
import { notFound } from "next/navigation";

interface ContentItem {
	slug: string;
	title: string;
	type: "articles";
	content: string[];
	sections: Section[];
}

interface Section {
	id: string;
	title: string;
}

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const content = (ArticlesData as Record<string, ContentItem>)[slug];
	if (!content || content.type !== "articles") return notFound();

	return {
		title: `${content.title} | Stephen's Portfolio`,
		description: `Read my article about ${content.title}`,
	};
}

export default function ArticleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
