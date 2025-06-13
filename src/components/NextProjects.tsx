// src/components/NextProjects.js
"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NextProjectsData from "../data/NextProjects";

export default function NextProjects() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const cardWidthRef = useRef(400); // Use ref instead of state

	// Calculate card width including gap
	useEffect(() => {
		const updateCardWidth = () => {
			if (scrollRef.current) {
				const card = scrollRef.current.querySelector(".next-project-card");
				if (card) {
					const computedStyle = window.getComputedStyle(scrollRef.current);
					const gap = parseInt(computedStyle.gap || "16", 10);
					cardWidthRef.current = card.clientWidth + gap;
				}
			}
		};

		updateCardWidth();
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
				? Math.max(0, currentScroll - cardWidthRef.current)
				: Math.min(maxScroll, currentScroll + cardWidthRef.current);

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
		<div className="relative w-full max-w-6xl mx-auto px-4 py-8">
			<div className="relative">
				{/* Navigation arrows */}
				<div className="absolute inset-y-0 flex items-center justify-between w-full z-10 px-2 pointer-events-none">
					<button
						onClick={() => handleArrowClick("left")}
						className="bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full p-2 transition-all duration-300 transform hover:scale-110 group pointer-events-auto"
						aria-label="Previous project">
						<IoIosArrowBack className="text-3xl md:text-4xl text-white group-hover:text-blue-300 transition-colors" />
					</button>

					<button
						onClick={() => handleArrowClick("right")}
						className="bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full p-2 transition-all duration-300 transform hover:scale-110 group pointer-events-auto"
						aria-label="Next project">
						<IoIosArrowForward className="text-3xl md:text-4xl text-white group-hover:text-blue-300 transition-colors" />
					</button>
				</div>

				{/* Scrollable project container */}
				<div
					ref={scrollRef}
					onScroll={updateScrollProgress}
					className="flex gap-4 overflow-x-auto hide-scrollbar rounded-2xl px-2 py-4">
					{NextProjectsData.map((project, index) => (
						<div
							key={index}
							className="next-project-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px]">
							<div className="flex flex-col md:flex-row justify-between items-center bg-[#252e43] p-4 transition-all hover:bg-[#2d3a54] rounded-xl h-full">
								{/* Text Content */}
								<div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-8">
									<h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
										{project.title}
									</h2>
									<p className="text-white/80 text-base md:text-sm mb-4">
										{project.description}
									</p>
								</div>

								{/* Image */}
								<div className="w-full md:w-1/3 flex justify-center">
									<div className="relative w-full">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-40 object-cover rounded-lg shadow-xl"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Progress bar */}
			<div className="bg-[#252e43] rounded-xl h-1 mt-6 w-full overflow-hidden">
				<div
					style={{ width: `${scrollProgress * 100}%` }}
					className="h-full rounded-xl bg-gradient-to-r from-white via-[#bddafe] to-[#9bbce5] transition-all duration-200"></div>
			</div>
		</div>
	);
}
