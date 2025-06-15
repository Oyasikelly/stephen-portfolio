"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";
import FavouriteTools from "@/components/FavouriteTools";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import portfolioPreviews from "../data/portfolioPreviews";

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
		<div className="px-4 sm:px-6 md:px-20 lg:px-40">
			<HeroSection />

			{/* Other sections */}
			<section className="py-0">
				<FavouriteTools />
			</section>

			<section className="py-10 md:py-20">
				<h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
					FEATURED PROJECTS
				</h2>
				<div className="space-y-10 md:space-y-20">
					{portfolioPreviews.map((project, index) => (
						<FeaturedProjects
							key={project.title}
							title={project.title}
							image={project.image}
							index={index.toString()}
							link={project.link}>
							{project.description}
						</FeaturedProjects>
					))}
				</div>
				<div className="w-fit mt-10 md:mt-20 mx-auto group">
					<Button url={"/portfolio"}>
						View more projects{" "}
						<FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[-60deg]" />
					</Button>
				</div>
			</section>

			<section className="shadow-lg shadow-black/10 px-2 py-6 md:py-10">
				<h2 className="text-2xl md:text-3xl font-extrabold mb-4">Articles</h2>

				<ArticleCard
					onScroll={updateScrollProgress}
					ref={scrollRef}
				/>

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
			</section>
		</div>
	);
}
