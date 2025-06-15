// components/Highights.tsx
import { ReactNode } from "react";

const Highlights = () => {
	return (
		<>
			<section id="highlights">
				<p className="py-4 text-base md:text-lg text-white/60 ">
					A <span className="text-[#9bbce5]">Global Talent </span> awardee based
					in London, United Kingdom that is a self-taught Frontend Heavy
					Fullstack Software Engineer that builds products with an end-to-end
					perspective, with background in Electrical & Electronics Engineering,
					experience in Product Design and backend development, his
					implementations are usually classified as pixel-perfect & eye-candy
					due to how he factors intuitive human-centered experiences with a well
					thought-out business logic.
				</p>
			</section>
			<section
				id="communities"
				className="mt-8 md:mt-10">
				<h2 className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Communities
				</h2>
				<p className="text-white/60 mt-6 mb-10">
					I contribute to many communities in different forms, to mention a few,
					I am a contributor/mentor at
				</p>
				<div>
					<img
						src="/assets/testimonial.png"
						alt="testifier"
						className="w-full object-contain rounded-sm mt-4"
					/>
				</div>
			</section>

			<section
				id="journey"
				className="mt-8 md:mt-10">
				<h2 className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Journey
				</h2>
				<p className="text-white/60 mt-4 md:mt-6 mb-8 md:mb-10 text-sm md:text-base">
					He is currently building the future of embedded finance with Montie
					delivering SDKs and APIs that transforms businesses with fully fledged
					invoicing, AP/AR functionalities and automations.
					<br /> <br />
					He was previously at checkout.com facilitating secure payments across
					the world, fighting fraud, and maximizing approval rates, read more
					about his...
					<br /> <br />
					Checkout.com is an international financial technology company which
					processes payments for other companies. Founded as Opus Payments in
					2009, it is headquartered in London, United Kingdom. It had a
					valuation of $40 billion USD in 2022, making it the most valuable
					European fintech startup.
					<br /> <br />
					Prior to checkout.com, he worked at Kloud Commerce (formerly
					PayPecker) as the Frontend Lead, where he collaboratively pioneered
					the development of a customer-facing and merchant-facing
					e-commerce/FinTech solution which facilitated synchronized sales data
					across multiple channels (e.g. Woo-Commerce and Point of Sales (P.O.S)
					outlets in multiple locations) with internal tools for administrative
					management e.g. handling Know Your Customer (K.Y.C) processes, read
					more about his...
					<br /> <br />
					Over the years, he has consulted for and worked with different
					companies in diverse industries & sectors like Advertising &
					Marketing, Oil & gas, Education e.t.c in designing and building
					solutions from the ground up through the SDLC (Software Development
					Life Cycle) from conceptualisation/ideation phase to production stage
					with the comapny's OKPs (Objective Key Results) in view.
				</p>
			</section>

			<section
				id="hobbies"
				className="mt-8 md:mt-10">
				<h2 className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Hobbies
				</h2>
				<p className="text-white/60 mt-4 md:mt-6 mb-8 md:mb-10 text-sm md:text-base">
					He is a music lover and a creative that enjoys travelling, exploring
					and appreciates art. Whenever he is not writing code, designing,
					building or learning something, he is probably playing video games
					(usually Call of Duty Mobile (COD) and car racing games e.g. F1), or
					swimming, cycling, playing a game of snooker, catching up with family,
					friends and acquaintances or maybe just eating and sleeping.
				</p>
			</section>
		</>
	);
};

export default Highlights;
