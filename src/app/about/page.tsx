"use client";

import { useState } from "react";
import Profile from "@/components/Profile";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import customAboutLinks from "@/data/customAboutLinks";
import AnimatedSection from "@/components/AnimatedSection";
import SoftPageFade from "@/components/SoftPageFade";
import HorizontalLine from "@/components/HorizontalLine";
import { Text } from "@/components/Text";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import TopHeader from "@/components/TopHeader";
import { FaRegSmileBeam } from "react-icons/fa";

const journeyContent = (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<Text
				as="h2"
				className="text-light text-3xl font-serif mb-4">
				Journey
			</Text>
			<Text
				as="p"
				className="mb-4">
				He is currently revolutionizing global money transfers at{" "}
				<span className="text-primary font-semibold">Wise</span>. Prior to Wise,
				he worked at{" "}
				<span className="text-primary font-semibold">Checkout.com</span>{" "}
				facilitating secure payments across the world, fighting fraud, and
				maximizing approval rates, read more about his{" "}
				<span className="text-primary font-semibold">
					impact at checkout.com
				</span>
				.
			</Text>
			<Text
				as="p"
				className="mb-4">
				Asides these two payment giants, he has also worked with multiple
				startups like <span className="text-primary font-semibold">Monite</span>{" "}
				in building white labelled accounting solutions for embedded finance
				through SDKs and APIs that transforms businesses with fully fledged
				invoicing, AP/AR functionalities and automations.
			</Text>
		</div>
		<div>
			<Text
				as="p"
				className="mb-4">
				<span className="font-bold">Kloud Commerce (formerly PayPecker)</span>{" "}
				as the Frontend Lead, where he collaboratively pioneered the development
				of a customer-facing and merchant-facing e-commerce/FinTech solution
				which facilitated synchronized sales data across multiple channels (e.g.
				Woo-Commerce and Point of Sale (P.O.S) outlets in multiple locations)
				with internal tools for administrative management and onboarding, read
				more about his{" "}
				<span className="text-primary font-semibold">
					impact at Kloud Commerce
				</span>
				.
			</Text>
			<Text as="p">
				Over the years, he has consulted for and worked with different companies
				in diverse industries & sectors like Advertising & Marketing, Oil & gas,
				Education e.t.c in designing and building and driving solutions from an
				idea to production through the SDLC (Software Development Life Cycle)
				with the company's OKRs (Objective Key Results) in view.
			</Text>
		</div>
	</div>
);

function JourneyModal({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					className="fixed inset-0 z-[9999] bg-secondary flex items-center justify-center">
					<motion.div
						initial={{ scale: 0.95, y: 40 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.95, y: 40 }}
						transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
						className="bg-card max-w-4xl w-full mx-4 md:mx-0 rounded-xl p-8 shadow-2xl overflow-y-auto testimonial-scrollbar max-h-[80vh] relative">
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-white text-2xl hover:text-primary transition-colors"
							aria-label="Close">
							&times;
						</button>
						{journeyContent}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default function About() {
	const [showJourney, setShowJourney] = useState(false);
	return (
		<SoftPageFade>
			<div
				id="about"
				className="pt-12">
				<TopHeader
					title="Meet Stephen Okuanade"
					page=""
				/>
				<HorizontalLine />
				<AnimatedSection>
					<div className="flex flew-col-1 md:flex-row md:justify-between gap-8 px-4 sm:px-10 md:px-20 lg:px-40 bg-tertiary min-h-screen bg-red-200">
						<div className="w-auto md:w-full gap-4 py-12">
							{/* Left: My Story */}
							<div className="w-full flex flex-col gap-8">
								<div className="bg-card rounded-xl border-2 border-[#252e43] p-8 flex flex-col md:flex-row justify-center items-center gap-8">
									<h2 className="md:w-1/3 w-full text-2xl md:text-3xl font-serif mb-2 text-white text-center">
										My Story
									</h2>
									<div className="flex-1 w-full flex flex-col items-center md:items-start justify-center">
										<Text
											as="p"
											className="text-base md:text-lg text-white/80 mb-4 text-center md:text-left">
											<span className="text-primary font-semibold">
												A Global Talent
											</span>{" "}
											awardee based in London, United Kingdom that is a
											self-taught Frontend Heavy Fullstack Software Engineer
											that builds products with an end-to-end perspective, with
											background in Electrical & Electronics Engineering,
											experience in Product Design and backend development.
											<br />
											<br />
											His implementations are usually classified as
											pixel-perfect & eye-candy due to how he factors intuitive
											human-centered experiences with a well thought-out
											business logic.
										</Text>
										<div className="flex items-center gap-4 mt-2">
											<Button
												variant="outline"
												onClick={() => setShowJourney(true)}>
												Read journey
											</Button>
										</div>
									</div>
								</div>
								{/* Highlights, Experience, ADPList, etc. */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div className="bg-card rounded-xl border-2 border-[#252e43] p-6 flex flex-col gap-2">
										{/* <h3 className="text-lg font-semibold text-white mb-2">
											Highlights
										</h3> */}
										<Profile />
									</div>
									<div className="bg-card rounded-xl border-2 border-[#252e43] p-6 flex flex-col gap-2">
										{/* <h3 className="text-lg font-semibold text-white mb-2">
											Favorite Tools
										</h3> */}
										<Skills />
									</div>
									<div className="flex text-center md:text-justify justify-between items-center gap-4">
										<div className="w-1/2 h-full bg-card rounded-xl border-2 border-[#252e43] p-1 md:p-4 flex flex-col gap-2 items-center justify-center">
											<Text
												as="h2"
												className="text-light">
												10 years
											</Text>
											<span className="text-white/70">of experience</span>
										</div>
										<div className="w-1/2 h-full bg-card rounded-xl border-2 border-[#252e43]  p-1 md:p-4 flex flex-col gap-2 items-center justify-center">
											<Text
												as="h2"
												className="text-light">
												Top 1%
											</Text>
											<span className="text-white/70">mentor out of 30k+</span>
										</div>
									</div>
									<div className="flex flex-col md:flex-row justify-between items-center bg-card rounded-xl border-2 border-[#252e43] pl-0 md:pl-6 py-1 ">
										<div className="w-1/3 mb-2 bg-card py-2 md:py-0  flex flex-row gap-2 justify-center items-center">
											<FaRegSmileBeam />
											<span className="text-white  font-semibold">ADPList</span>
										</div>

										<div className="bg-secondary rounded-xl p-2 text-center	">
											<span className="w-2/3 text-white/70 mb-2">
												Join ADPList as a mentee or mentor with this{" "}
												<a
													href="#"
													className="text-primary font-semibold">
													referral link
												</a>
												.
											</span>
											<div className="py-2">
												<Button
													variant="default"
													className="">
													Book mentorship session
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Right: Sticky Sidebar */}
						<div className="w-fit py-12">
							<div className="sticky top-24 bg-transparent p-0">
								<span className="text-white/60 text-sm font-semibold">
									ON THIS PAGE
								</span>
								<ul className="mt-2 w-full">
									{customAboutLinks.map((link, index) => (
										<li
											key={index}
											className="mb-2">
											<a
												href={link.href}
												className="text-dimlight hover:underline">
												{link.title}
											</a>
											{link.children && (
												<ul className="ml-4">
													{link.children.map((child, childIndex) => (
														<li key={childIndex}>
															<a
																href={`#${child.id}`}
																className="text-dimlight hover:underline">
																{child.name}
															</a>
														</li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</AnimatedSection>
				<JourneyModal
					open={showJourney}
					onClose={() => setShowJourney(false)}
				/>
			</div>
		</SoftPageFade>
	);
}
