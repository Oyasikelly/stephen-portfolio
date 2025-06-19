import { Metadata } from "next";
import ArticlesData from "@/data/articles.json";

export const metadata: Metadata = {
	title: "Articles | Stephen's Portfolio",
	description:
		"Read my latest articles about web development, programming, and technology.",
};

export default function ArticlesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
