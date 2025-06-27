// app/portfolio/[slug]/page-article.tsx
import { Metadata } from "next";
import TopHeader from "@/components/TopHeader";
import { notFound } from "next/navigation";
import TheExpectations from "@/components/The_Expectations";
import MasteringCssGrid from "@/components/MasteringCssGrid";
import SeoInModernWeb from "@/components/SeoInModernWeb";
import ArticlesData from "@/data/articles.json";
import SoftPageFade from "@/components/SoftPageFade";
import HorizontalLine from "@/components/HorizontalLine";
import SocialIconLinks from "@/components/SocialIconLinks";

interface Section {
	id: string;
	title: string;
}

interface ContentItem {
	slug: string;
	title: string;
	type: "articles";
	content: string[];
	sections: Section[];
}

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

// Map slugs to their React components
const articleComponentMap: Record<string, React.FC<any>> = {
	"the-expectations": TheExpectations,
	"mastering-css-grid": MasteringCssGrid,
	"seo-in-modern-web": SeoInModernWeb,
};

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const content = (ArticlesData as Record<string, ContentItem>)[slug];
	if (!content || content.type !== "articles") return notFound();

	return {
		title: `${content.title} | Stephen's Portfolio`,
		description: `Read my article about ${content.title}`,
	};
}

export default async function ArticlePage({ params }: PageProps) {
	const { slug } = await params;
	const content = (ArticlesData as Record<string, ContentItem>)[slug];
	if (!content || content.type !== "articles") return notFound();

	// Get the appropriate component for the slug
	const ArticleComponent = articleComponentMap[slug];
	if (!ArticleComponent) return notFound();

	console.log(content);
	return (
		<SoftPageFade>
			<div className="min-h-screen bg-[#111724] text-white pt-12">
				<TopHeader
					title={content.title}
					page={`Home/Articles/${
						content.title.length > 20
							? content.title.slice(0, 20) + "..."
							: content.title
					}`}
				/>
				<div className="mt-6 flex justify-center">
					<img
						src={`/assets/articles/${content.slug}.png`}
						alt={content.title}
						className="w-[60%] h-auto object-cover object-center rounded-lg"
					/>
				</div>
				<div className="mt-6">
					<HorizontalLine />
				</div>
				<div className="px-4 sm:px-6 md:px-8 lg:px-40 bg-[#111724]">
					<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
						{/* Sidebar Links */}
						<div className="w-full lg:w-[20%] relative z-20 lg:sticky top-4">
							<h2 className="text-base sm:text-lg lg:text-xl font-semibold">
								ON THIS PAGE
							</h2>
							<ul className="mt-2 space-y-1">
								{content.sections?.map((link, index) => (
									<li key={index}>
										<a
											href={`#${link.id}`}
											className="text-sm sm:text-base text-white/60 hover:underline">
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Article Content */}
						<div className="w-full lg:w-[55%] mb-6 pb-4">
							<div>{}</div>
							<ArticleComponent
								id={content.slug}
								// date={content.date}
								// time={content.time}
								title={content.title}
								content={content.content}
								sections={content.sections}
								link={`/articles/${content.slug}`}
							/>
						</div>

						{/* Socials */}
						<div className="w-full lg:w-[20%] pb-6 lg:pb-0 flex justify-center lg:justify-end lg:items-start gap-3 lg:sticky top-4">
							<SocialIconLinks />
						</div>
					</section>
				</div>
			</div>
		</SoftPageFade>
	);
}
