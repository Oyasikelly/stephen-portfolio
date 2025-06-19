// app/portfolio/[slug]/page.tsx
import TopHeader from "@/components/TopHeader";
import { EmailIcon, GitHubIcon, LinkedInIcon, MediumIcon } from "@/data/Icons";
import { notFound } from "next/navigation";
import portfolioData from "@/data/portfolios.json";
import Checkout from "@/components/Checkout";
import EcommerceUI from "@/components/Propbinder";
import PortfolioRevamp from "@/components/Pelago";
import Propbinder from "@/components/Propbinder";
import Pelago from "@/components/Pelago";
import Datkey from "@/components/Datkey";
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
	content: string[];
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
	const content = (portfolioData as Record<string, ContentItem>)[slug];
	if (!content || content.type !== "portfolio") return notFound();

	const PortfolioComponent = portfolioComponentMap[slug];
	if (!PortfolioComponent) return notFound();

	return (
		<div className="min-h-screen bg-[#111724] text-white pt-12">
			<TopHeader
				title={content.title}
				page={`Home/Portfolio/${content.title}`}
			/>
			<div className="mt-15 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]" />
			<div className="px-4 sm:px-6 md:px-8 lg:px-40 bg-[#111724]">
				<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
					<div className="w-full lg:w-[20%] relative z-20 lg:sticky top-4">
						<h2 className="text-base sm:text-lg lg:text-xl font-semibold">
							ON THIS PAGE
						</h2>
						<ul className="mt-2 space-y-1">
							{content.sections.map((link, index) => (
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
							id={content.slug}
							title={content.title}
							content={content.content}
							sections={content.sections}
							link={`/portfolio/${content.slug}`}
						/>
					</div>

					<div className="w-full lg:w-[20%] pb-6 lg:pb-0 flex justify-center lg:justify-end lg:items-start gap-3 lg:sticky top-4">
						<div className="flex flex-wrap justify-center gap-3">
							<LinkedInIcon className="w-8 h-8 sm:w-10 sm:h-10" />
							<GitHubIcon className="w-8 h-8 sm:w-10 sm:h-10" />
							<MediumIcon className="w-8 h-8 sm:w-10 sm:h-10" />
							<EmailIcon className="w-8 h-8 sm:w-10 sm:h-10" />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
