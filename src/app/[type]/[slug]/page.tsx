// app/[type]/[slug]/page.tsx
import PortfolioDetails from "@/components/PortfolioDetails";
import TheExpections from "@/components/The_Expectations";
import TopHeader from "@/components/TopHeader";
import customAboutLinks from "@/data/customAboutLinks";
import { EmailIcon, GitHubIcon, LinkedInIcon, MediumIcon } from "@/data/Icons";
import { notFound } from "next/navigation";
import { FaClock, FaShareAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

interface ContentItem {
	slug: string;
	title: string;
	type: "portfolio" | "articles";
	description?: string;
	content?: string[];
	stats?: { label: string; value: string }[];
	readTime?: number;
	sections?: { id: string; title: string }[];
	nextItems?: { slug: string; title: string; description: string }[];
}

export default function ContentDetailPage({
	params,
}: {
	params: { type: string; slug: string };
}) {
	// In a real app, this would come from an API or CMS
	const contentData: Record<string, ContentItem> = {
		checkout: {
			slug: "checkout",
			type: "portfolio",
			title: "Checkout",
			sections: [
				{ id: "introduction", title: "Introduction" },
				{ id: "features", title: "Features" },
				{ id: "my-role", title: "My role" },
				{ id: "Links", title: "Links" },
			],
			content: [
				"Significantly improvesales",
				"Not guaranteed your inventory, generate millions a month.",
			],
		},

		"the-expectations": {
			slug: "the-expectations",
			type: "articles",
			title:
				"The Expectations of a Senior Frontend Engineer - Skills and Responsibilities",
			sections: [
				{ id: "introduction", title: "Introduction" },
				{ id: "technical-skills", title: "Technical Skills and expertise" },
				{ id: "responsibilities", title: "Responsibilities" },
			],
			content: [
				"Checkout.com, is an international financial technology company which processes payments for other companies. Founded as Opus Payments in 2009, it is headquartered in London, United Kingdom. It had a valuation of $40 billion USD in 2022, making it the most valuable European fintech startup.",
				"In Conclusion Checkout.com, is an international financial technology company which processes payments for other companies. Founded as Opus Payments in 2009, it is headquartered in London, United Kingdom. It had a valuation of $40 billion USD in 2022, making it the most valuable European fintech startup.",
			],
			// nextItems: [
			// 	{
			// 		slug: "project1",
			// 		title: "Checkout",
			// 		description:
			// 			"A Financial Technology Company That Processes Payments For Other Companies With A USD 40 Billion.",
			// 	},
			// 	{
			// 		slug: "project2",
			// 		title: "Checkout",
			// 		description:
			// 			"A Financial Technology Company That Processes Payments For Other Companies With A USD 40 Billion.",
			// 	},
			// ],
		},
	};

	const content = contentData[params.slug];
	if (!content || content.type !== params.type) return notFound();

	return (
		<div className="min-h-screen bg-[#111724] text-white">
			{/* Navigation Header */}

			{content.type === "portfolio" ? (
				<PortfolioDetail content={content} />
			) : (
				<ArticleDetail content={content} />
			)}
		</div>
	);
}

// Portfolio Detail Component
function PortfolioDetail({ content }: { content: ContentItem }) {
	return (
		<div
			id="about"
			className="pt-12">
			<TopHeader
				title={`${content.title}`}
				page={`Home/${
					content.type.charAt(0).toUpperCase() + content.type.slice(1)
				}/${content.title}`}
			/>
			<div className="w-full flex justify-center items-center mt-10 px-4">
				<div className="w-full max-w-4xl">
					<img
						src="/assets/portfolio/ignition.png"
						alt="ignition"
						className="w-full"
					/>
				</div>
			</div>
			<div className="mt-15 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>
			<div className="px-4 sm:px-10 md:px-20 lg:px-40 bg-[#111724]">
				<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-10">
					<div className="w-full lg:w-[20%] relative z-20 lg:sticky top-4">
						<h2 className="text-base sm:text-lg lg:text-xl font-semibold">
							ON THIS PAGE
						</h2>
						<ul className="mt-2 space-y-1">
							{content.sections?.map((link, index) => (
								<li key={index}>
									<a
										href={link.id}
										className="text-sm sm:text-base text-white/60 hover:underline">
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="w-full lg:max-w-[80%] mb-6 pb-4">
						<PortfolioDetails />
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

// Article Detail Component
function ArticleDetail({ content }: { content: ContentItem }) {
	return (
		<div
			id="about"
			className="pt-12">
			<TopHeader
				title={`${content.title}`}
				page={`Home/${
					content.type.charAt(0).toUpperCase() + content.type.slice(1)
				}/${
					content.title.length > 20
						? content.title.slice(0, 20) + "..."
						: content.title
				}`}
			/>
			<div className="mt-15 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>
			<div className="px-4 sm:px-6 md:px-8 lg:px-40 bg-[#111724]">
				<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
					<div className="w-full lg:w-[20%] relative z-20 lg:sticky top-4">
						<h2 className="text-base sm:text-lg lg:text-xl font-semibold">
							ON THIS PAGE
						</h2>
						<ul className="mt-2 space-y-1">
							{content.sections?.map((link, index) => (
								<li key={index}>
									<a
										href={link.id}
										className="text-sm sm:text-base text-white/60 hover:underline">
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="w-full lg:w-[55%] mb-6 pb-4">
						<TheExpections />
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
