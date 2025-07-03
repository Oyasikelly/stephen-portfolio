import { Text } from "@/components/Text";
import portfolioData from "@/data/portfolios.json";
import AnyPortfolio from "../components/AnyPortfolio";
import Button from "@/components/Button";

interface Section {
	id: string;
	title: string;
}

interface PorfolioProps {
	link: string;
	id: string;
	content: string[] | Record<string, any>;
	sections: Section[];
}

export default function Checkout({ content, sections }: PorfolioProps) {
	return (
		<>
			<section className="">
				{/* Introduction */}
				<div id="introduction">
					<Text
						as="h2"
						className="text-light">
						Introduction
					</Text>
					<p className="mt-4 text-dimlight">
						Checkout.com is a leading payment platform known for its seamless
						user experience and modern payment flow. This project is a{" "}
						<strong>frontend rebuild and redesign</strong> of a Checkout-style
						payment interface. It showcases my skills in crafting highly
						intuitive UIs, focusing on clarity, responsiveness, and user trust—
						three pillars of successful checkout experiences.
					</p>
				</div>

				{/* Features */}
				<div
					id="features"
					className="my-6 ">
					<Text
						as="h2"
						style={{ borderBottom: "1px solid var(--dimbase)" }}
						className="text-light">
						Features
					</Text>
					<ul className="mt-4 list-decimal list-inside text-dimlight space-y-2  marker:text-[#c6e1f5]">
						<li>
							<span className="text-primary">Responsive Checkout Form –</span>
							Built with Tailwind CSS
						</li>
						<li>
							<span className="text-primary">Card Validation – </span>Real-time
							input formatting and error handling
						</li>
						<li>
							{" "}
							<span className="text-primary">Smooth Animations –</span> Enhanced
							UX with Framer Motion
						</li>
						<li>
							<span className="text-primary"> Progress Indicator –</span>{" "}
							Multi-step checkout stages
						</li>
						<li>
							<span className="text-primary">Error States –</span> User-friendly
							error feedback
						</li>
						<li>
							<span className="text-primary">Mobile-first Design – </span>
							Optimized touch and input behavior
						</li>
						<li>
							<span className="text-primary">Theming – </span> Clean, modern,
							dark mode-compatible UI
						</li>
					</ul>
				</div>

				{/* Role */}
				<div
					id="role"
					className="my-6">
					<Text
						as="h2"
						style={{ borderBottom: "1px solid var(--dimbase)" }}
						className="text-light">
						My Role
					</Text>
					<p className="mt-4 text-dimlight">
						I led the design and development of this project as a solo
						developer. My responsibilities included:
					</p>
					<ul className="list-disc list-inside mt-2 space-y-1 text-dimlight marker:text-[#c6e1f5]">
						<li>Creating wireframes based on Checkout.com</li>
						<li>Frontend coding with React + Tailwind CSS</li>
						<li>Animating transitions with Framer Motion</li>
						<li>Ensuring accessibility & responsiveness</li>
						<li>Managing form validation logic</li>
						<li>Deployment and project documentation</li>
					</ul>
				</div>

				{/* Links */}
				<div id="links">
					<Text
						as="h2"
						className="text-light">
						Links
					</Text>
					<ul className="mt-4 space-y-2 list-disc list-inside marker:text-[#c6e1f5]">
						<li>
							<a
								href="https://your-live-link.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline">
								Live Project
							</a>
						</li>
						<li>
							<a
								href="https://github.com/yourusername/checkout-clone"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline">
								GitHub Repository
							</a>
						</li>
					</ul>
				</div>

				{/* CTA */}
				<div className="bg-card p-8 rounded-lg mt-16 text-center">
					<h3 className="text-xl font-semibold text-light mb-4">
						Have an idea?
					</h3>
					<p className="text-dimlight mb-6">
						Let’s discuss the goals and values, then drill it down to a
						solution.
					</p>
					<Button
						url="tel:+2348130000000"
						variant="outline"
						showArrow>
						Book call
					</Button>
				</div>
			</section>
		</>
	);
}
