import NextProjects from "@/components/NextProjects";

interface PorfolioProps {
	link: string;
	id: string;
}

export default function PortfolioDetails() {
	return (
		<>
			<section
				id="introduction"
				className="max-w-4xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Introduction
				</h2>
				<p className="py-4 text-base md:text-lg text-white/60">
					Checkout.com, is an international financial technology company which
					processes payments for other companies. Founded as Opus Payments in
					2009, it is headquartered in London, United Kingdom. It had a
					valuation of
					<span className="font-bold text-white"> $40 billion USD</span> in
					2022, making it the most valuable European fintech startup.
				</p>
			</section>

			<section
				id="Technical_Skills"
				className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Technical Skills and expertise
				</h2>
				<p className="text-white/60 mt-6 mb-10">
					Checkout.com, is an international financial technology company which
					processes payments for other companies. Founded as Opus Payments in
					2009, it is headquartered in London, United Kingdom. It had a
					valuation of
					<span className="font-bold text-white"> $40 billion USD </span> in
					2022, making it the most valuable European fintech startup.
				</p>
			</section>

			<section
				id="responsibilities"
				className="mt-8 md:mt-10 max-w-4xl mx-auto flex gap-6">
				<div className="bg-[#9bbce5] rounded-xl w-1 flex-shrink-0"></div>
				<p className="text-white/60 text-sm md:text-base">
					In Conclusion Checkout.com, is an international financial technology
					company which processes payments for other companies. Founded as Opus
					Payments in 2009, it is headquartered in London, United Kingdom. It
					had a valuation of
					<span className="font-bold text-white"> $40 billion USD </span> in
					2022, making it the most valuable European fintech startup.
				</p>
			</section>

			<section
				id="hobbies"
				className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<h2 className="text-md md:text-xl font-bold border-b-2 border-[#252e43] pb-2">
					NEXT PROJECTS
				</h2>
				<NextProjects />
			</section>
		</>
	);
}
