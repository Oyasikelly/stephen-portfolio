"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";
import FavouriteTools from "@/components/FavouriteTools";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import portfolioPreviews from "../data/portfolioPreviews";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import TypingText from "@/components/TypingText";

export default function Home() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [cardWidth, setCardWidth] = useState(416); // Default card width

	// Get dynamic card width on mount and resize
	useEffect(() => {
		const updateCardWidth = () => {
			if (scrollRef.current) {
				const card = scrollRef.current.querySelector(".article-card");
				if (card) {
					const computedStyle = window.getComputedStyle(card);
					const width = card.clientWidth;
					const gap = parseInt(computedStyle.gap || "16", 10); // Get gap from CSS (default 16px)
					setCardWidth(width + gap);
				}
			}
		};

		// Initial calculation
		updateCardWidth();

		// Update on resize
		window.addEventListener("resize", updateCardWidth);
		return () => window.removeEventListener("resize", updateCardWidth);
	}, []);

	const handleArrowClick = (direction: "left" | "right") => {
		if (!scrollRef.current) return;

		const container = scrollRef.current;
		const currentScroll = container.scrollLeft;
		const containerWidth = container.clientWidth;
		const maxScroll = container.scrollWidth - containerWidth;

		let newScroll =
			direction === "left"
				? Math.max(0, currentScroll - cardWidth)
				: Math.min(maxScroll, currentScroll + cardWidth);

		container.scrollTo({
			left: newScroll,
			behavior: "smooth",
		});
	};

	const updateScrollProgress = useCallback(() => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			const maxScroll = scrollWidth - clientWidth;
			if (maxScroll > 0) {
				setScrollProgress(scrollLeft / maxScroll);
			}
		}
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="">
			<AnimatedSection>
				<HeroSection />
			</AnimatedSection>

			<AnimatedSection delay={0.2}>
				<section className="py-0">
					<FavouriteTools />
				</section>
			</AnimatedSection>

			{/* arrow down */}
			<div className="flex justify-center py-8">
				<span
					onClick={() => {
						const featuredProjectsSection = document.querySelector(
							".featured-projects-container"
						);
						if (featuredProjectsSection) {
							featuredProjectsSection.scrollIntoView({ behavior: "smooth" });
						}
					}}
					className="cursor-pointer w-fit p-3 hover:text-white/30 hover:bg-[#111724] rounded-xl transition-all duration-300 ease-in-out">
					<FaArrowUp className="arrow-animate arrow-animate-1 rotate-180" />
				</span>
			</div>

			<motion.div className="h-[127vh] md:h-[105vh] overflow-y-auto relative hide-scrollbar featured-projects-container">
				<AnimatedSection delay={0.4}>
					<motion.section className="px-4 sm:px-6 md:px-20 lg:px-40 ">
						<TypingText
							text="FEATURED PROJECTS"
							className="sticky top-0 text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center"
							speed={0.03}
						/>
						<div className="h-fit sticky -z-10 shadow-lg shadow-black/20  mt-6 md:mt-10">
							{portfolioPreviews.map((project, index) => (
								<motion.div
									key={index}
									style={{
										position: "sticky",
										top: `${(index + 1) * 48}px`,
										// top: "0px",
										// marginBottom: "-8px",
										marginTop: "100px",
										padding: "0px",

										boxShadow: "0 -10px 30px -15px rgba(0, 0, 0, 0.3)",
									}}
									className="overflow-hidden h-[90vh] md:h-[458px]  border-1 border-[#252e43] rounded-lg shadow-lg shadow-black/20 ">
									<AnimatedCard
										key={project.title}
										index={index}>
										<FeaturedProjects
											title={project.title}
											image={project.image}
											index={index}
											link={project.link}>
											{project.description}
										</FeaturedProjects>
									</AnimatedCard>
								</motion.div>
							))}
						</div>

						<div className="w-fit mt-10 md:mt-20 mx-auto group">
							<Button url={"/portfolio"}>
								<TypingText
									text="View more projects"
									speed={0.02}
								/>{" "}
								<FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[-60deg]" />
							</Button>
						</div>
					</motion.section>
				</AnimatedSection>
			</motion.div>

			{/* arrow down */}
			<div className="flex justify-center py-8">
				<span
					onClick={() => {
						const articlesSection = document.querySelector("section.py-6");
						if (articlesSection) {
							articlesSection.scrollIntoView({ behavior: "smooth" });
						}
					}}
					className="cursor-pointer w-fit p-3 hover:text-white/30 hover:bg-[#111724] rounded-xl transition-all duration-300 ease-in-out">
					<FaArrowUp className="arrow-animate arrow-animate-1 rotate-180" />
				</span>
			</div>

			<AnimatedSection delay={0.6}>
				<section className="py-6 md:py-10 px-4 sm:px-6 md:px-20 lg:px-40 ">
					<motion.div className="shadow-lg shadow-black/10 md:py-10 ">
						<TypingText
							text="Articles"
							className="text-2xl md:text-3xl font-extrabold mb-4"
							speed={0.03}
						/>

						<AnimatedCard>
							<ArticleCard
								onScroll={updateScrollProgress}
								ref={scrollRef}
							/>
						</AnimatedCard>

						{/* Navigation Arrows */}
						<div className="flex items-center justify-end gap-2 py-6 md:py-10">
							<span
								onClick={() => handleArrowClick("left")}
								className="cursor-pointer w-fit p-3 hover:bg-[#252e43] rounded-full transition-all duration-300 ease-in-out">
								<FaArrowLeft />
							</span>
							<span
								onClick={() => handleArrowClick("right")}
								className="cursor-pointer w-fit p-3 hover:bg-[#252e43] rounded-full transition-all duration-300 ease-in-out">
								<FaArrowRight />
							</span>
						</div>

						{/* Progress bar */}
						<div className="bg-[#252e43] rounded-xl h-1 mb-10 md:mb-20 w-full overflow-hidden">
							<div
								style={{ width: `${scrollProgress * 100}%` }}
								className="h-full rounded-xl bg-gradient-to-r from-white via-[#bddafe] to-[#9bbce5] transition-all duration-200"></div>
						</div>
					</motion.div>
				</section>
			</AnimatedSection>
		</div>
	);
}
