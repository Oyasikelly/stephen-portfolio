"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import TestimonialData from "@/data/testimonial";

export default function Testimonials() {
	const [expandedTestimonials, setExpandedTestimonials] = useState<{
		[key: number]: boolean;
	}>({});
	const [cardWidth, setCardWidth] = useState(400); // Default card width
	const scrollRef = useRef<HTMLDivElement>(null);
	const maxLength = 150; // Maximum characters before truncation

	// Get dynamic card width on mount and resize
	useEffect(() => {
		const updateCardWidth = () => {
			if (scrollRef.current) {
				const card = scrollRef.current.querySelector(".testimonial-card");
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

	const toggleTestimonial = (index: number) => {
		setExpandedTestimonials((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const truncateText = (text: string, index: number) => {
		const isExpanded = expandedTestimonials[index];

		if (text.length <= maxLength || isExpanded) {
			return text;
		}

		return text.substring(0, maxLength) + "...";
	};

	return (
		<section className="w-full">
			<div className="px-4 sm:px-6 md:px-20 lg:px-40 py-10 flex flex-col justify-center ">
				<h2 className="w-fit text-2xl md:text-3xl font-semibold mb-6 md:mb-10">
					What people say about me
				</h2>

				<div
					ref={scrollRef}
					className="w-full flex gap-4 md:gap-6 overflow-x-auto testimonial-scrollbar pb-4 snap-x snap-mandatory">
					{TestimonialData.map((testimonial, index) => (
						<div
							key={index}
							className="testimonial-card min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[450px] bg-[#1B212E] rounded-xl p-6 md:p-8 border border-[#546D7F] hover:border-[#9BBCE5] transition-colors duration-300 flex flex-col justify-between gap-4 snap-start">
							<div className="flex-1">
								<p className="text-[#ffffffb4] text-sm md:text-base leading-relaxed italic">
									"{truncateText(testimonial.testimony, index)}"
								</p>
								{testimonial.testimony.length > maxLength && (
									<button
										onClick={() => toggleTestimonial(index)}
										className="text-[#9BBCE5] text-sm hover:text-white transition-colors duration-200 mt-2 font-medium">
										{expandedTestimonials[index] ? "See less" : "See more"}
									</button>
								)}
							</div>
							<div className="mt-4">
								<p className="text-white font-semibold text-sm md:text-base">
									{testimonial.name}
								</p>
								<p className="text-[#9BBCE5] text-xs md:text-sm">
									{testimonial.position}
								</p>
							</div>
						</div>
					))}
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
			</div>
		</section>
	);
}
