// app/portfolio/[slug]/page-article.tsx
import { Metadata } from "next";
import TopHeader from "@/components/TopHeader";
import { notFound } from "next/navigation";
import TheExpectations from "@/ArticlePages/The_Expectations";
import MasteringCssGrid from "@/ArticlePages/MasteringCssGrid";
import SeoInModernWeb from "@/ArticlePages/SeoInModernWeb";
import ArticlesData from "@/data/articles.json";
import SoftPageFade from "@/components/SoftPageFade";
import HorizontalLine from "@/components/HorizontalLine";
import SocialIconLinks from "@/components/SocialIconLinks";
import PrevNexCardClientWrapper from "@/components/PrevNexCardClientWrapper";
import ProjectImage from "@/components/ProjectImage";
import HeadingDetails from "@/components/HeadingDetails";
import YourClientComponent from "@/components/YourClientComponent";
import ShareIdeaCard from "@/components/ShareIdeaCard";

interface Section {
	id: string;
	title: string;
}

interface ContentItem {
	slug: string;
	title: string;
	type: "articles";
	content: string[] | Record<string, any>;
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
	const keys = Object.keys(ArticlesData);
	const idx = keys.indexOf(slug);
	const prevKey = idx > 0 ? keys[idx - 1] : null;
	const nextKey = idx < keys.length - 1 ? keys[idx + 1] : null;
	const prev = prevKey ? (ArticlesData as any)[prevKey] : null;
	const next = nextKey ? (ArticlesData as any)[nextKey] : null;
	const content = (ArticlesData as Record<string, ContentItem>)[slug];
	if (!content || content.type !== "articles") return notFound();

	// Get the appropriate component for the slug
	const ArticleComponent = articleComponentMap[slug];
	if (!ArticleComponent) return notFound();

	const getDescription = (item: any) => {
		if (Array.isArray(item.content)) return item.content[0];
		if (typeof item.content === "object" && item.content.introduction)
			return item.content.introduction;
		return "";
	};

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
					<ProjectImage
						src={`/assets/articles/${content.slug}.png`}
						alt={content.title}
						small={false}
					/>
				</div>
				<div className="mt-6">
					<HorizontalLine />
				</div>
				<div className="px-4 sm:px-6 md:px-8 lg:px-40 bg-[#111724]">
					<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
						{/* Sidebar Links */}
						<div className="w-full lg:w-[10%] relative z-20 lg:sticky top-4">
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
						<div className="w-full lg:w-[80%] mb-6 pb-4">
							<YourClientComponent content={content} />

							<ArticleComponent
								link={`/articles/${content.slug}`}
								{...content}
							/>
						</div>

						{/* Socials */}
						<ShareIdeaCard />
					</section>

					{/* Prev/Next navigation card */}
					<div className="flex justify-center items-center">
						<PrevNexCardClientWrapper
							prev={
								prev
									? {
											slug: prev.slug,
											title: prev.title,
											description: getDescription(prev),
											image: prev.img,
											link: `/articles/${prev.slug}`,
									  }
									: undefined
							}
							next={
								next
									? {
											slug: next.slug,
											title: next.title,
											description: getDescription(next),
											image: next.img,
											link: `/articles/${next.slug}`,
									  }
									: undefined
							}
						/>
					</div>
				</div>
			</div>
		</SoftPageFade>
	);
}
