"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";
import FavouriteTools from "@/components/FavouriteTools";
import HeroSection from "@/components/HeroSection";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import Testimonials from "@/components/Testimonials";
import StoicQuote from "@/components/StoicQuote";
import SoftPageFade from "@/components/SoftPageFade";
import List from "@/components/List";

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

	return (
		<SoftPageFade>
			<div className="">
				<HeroSection />

				<section className="py-0">
					<FavouriteTools />
				</section>

				{/* FEATURED PROJECTS with stacking animation */}

				<motion.section className="px-4 sm:px-6 md:px-20 lg:px-40 ">
					<List />
				</motion.section>

				<div className="w-fit mt-10 md:mt-20 mx-auto group">
					<Button
						variant="outline"
						url={"/portfolio"}
						showArrow>
						View more projects
					</Button>
				</div>

				<Testimonials />

				<StoicQuote />

				<section className="py-6 md:py-10 px-4 sm:px-6 md:px-20 lg:px-40 ">
					<motion.div className="shadow-lg shadow-black/10 md:py-10 ">
						<h2 className="text-2xl font-bold mb-4">ARTICLES</h2>
						<div className="mb-10">
							<AnimatedCard>
								<ArticleCard
									onScroll={updateScrollProgress}
									ref={scrollRef}
								/>
							</AnimatedCard>
						</div>
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
			</div>
		</SoftPageFade>
	);
}
