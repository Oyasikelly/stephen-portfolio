import TopHeader from "@/components/TopHeader";
import { notFound } from "next/navigation";
import portfolioData from "@/data/portfolios.json";

// Components
import Checkout from "@/PortfolioPages/Checkout";
import EcommerceUI from "@/PortfolioPages/Propbinder";
import PortfolioRevamp from "@/PortfolioPages/Pelago";
import Propbinder from "@/PortfolioPages/Propbinder";
import Pelago from "@/PortfolioPages/Pelago";
import Datkey from "@/PortfolioPages/Datkey";
import SoftPageFade from "@/components/SoftPageFade";
import SocialIconLinks from "@/components/SocialIconLinks";
import HorizontalLine from "@/components/HorizontalLine";
import PrevNexCardClientWrapper from "@/components/PrevNexCardClientWrapper";
import ProjectImage from "@/components/ProjectImage";
import { Text } from "@/components/Text";
// import EcommerceUI from "@/components/EcommerceUI";
// import PortfolioRevamp from "@/components/PortfolioRevamp";

interface Section {
	id: string;
	title: string;
}

interface ContentItem {
	slug: string;
	title: string;
	type: "portfolio";
	content: string[] | Record<string, any>;
	sections: Section[];
}

const portfolioComponentMap: Record<string, React.FC<any>> = {
	checkout: Checkout,
	propbinder: Propbinder,
	pelago: Pelago,
	datkey: Datkey,
};

export default async function PortfolioPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const keys = Object.keys(portfolioData);
	const idx = keys.indexOf(slug);
	const prevKey = idx > 0 ? keys[idx - 1] : null;
	const nextKey = idx < keys.length - 1 ? keys[idx + 1] : null;
	const prev = prevKey ? (portfolioData as any)[prevKey] : null;
	const next = nextKey ? (portfolioData as any)[nextKey] : null;
	const content = (portfolioData as any)[slug];
	if (!content || content.type !== "portfolio") return notFound();

	const PortfolioComponent = portfolioComponentMap[slug];
	if (!PortfolioComponent) return notFound();

	// Helper to get description and image
	const getDescription = (item: any) => {
		if (Array.isArray(item.content)) return item.content[0];
		if (typeof item.content === "object" && item.content.introduction)
			return item.content.introduction;
		return "";
	};
	// const getImage = (item: any) => {
	// 	const imgPath = `/assets/portfolio/${item.slug}.png`;
	// 	// Ideally, check if file exists, but fallback handled in PrevNexCard
	// 	return imgPath;
	// };

	return (
		<SoftPageFade>
			<div className="min-h-screen  text-white pt-12">
				<TopHeader
					title={content.title}
					page={`Home/Portfolio/${content.title}`}
				/>

				<div className="mt-6 flex justify-center">
					<ProjectImage
						src={`/assets/portfolio/${content.slug}.png`}
						alt={content.title}
						small={false}
					/>
				</div>

				<div className="mt-6">
					<HorizontalLine />
				</div>
				<div className="px-4 sm:px-6 md:px-8 lg:px-40 bg-[#111724]">
					<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
						<div className="w-full lg:w-[20%] relative z-20 lg:sticky top-4">
							<Text
								as="h3"
								className="text-light font-serif">
								ON THIS PAGE
							</Text>
							<ul className="mt-2 space-y-1">
								{content.sections.map((link: Section, index: number) => (
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

						<div className="w-full lg:w-[55%] mb-6 pb-4">
							<PortfolioComponent
								link={`/portfolio/${content.slug}`}
								{...content}
							/>
						</div>

						<div className="w-full lg:w-[20%] pb-6 lg:pb-0 flex justify-center lg:justify-end lg:items-start gap-3 lg:sticky top-4">
							<SocialIconLinks />
						</div>
					</section>
					{/* Portfolio navigation card */}
					<div className="flex justify-center items-center">
						<PrevNexCardClientWrapper
							prev={
								prev
									? {
											slug: prev.slug,
											title: prev.title,
											description: getDescription(prev),
											image: prev.img,
											link: `/portfolio/${prev.slug}`,
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
											link: `/portfolio/${next.slug}`,
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
