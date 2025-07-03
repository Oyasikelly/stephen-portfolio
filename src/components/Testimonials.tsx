"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import TestimonialData from "@/data/testimonial";
import { Text } from "./Text";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "@/libs/styles/colors";

export default function Testimonials() {
	const [expandedTestimonials, setExpandedTestimonials] = useState<{
		[key: number]: boolean;
	}>({});
	const [modalIndex, setModalIndex] = useState<number | null>(null);
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

	const openModal = (index: number) => setModalIndex(index);
	const closeModal = () => setModalIndex(null);

	return (
		<section className="w-full">
			<div className="px-4 sm:px-6 md:px-20 lg:px-40 py-10 flex flex-col justify-center ">
				<Text
					as="h2"
					className="text-dimlight mb-6 md:mb-10 font-serif">
					What people say about me
				</Text>

				<div
					ref={scrollRef}
					className="w-full flex gap-4 md:gap-6 overflow-x-auto testimonial-scrollbar pb-4 snap-x snap-mandatory">
					{TestimonialData.map((testimonial, index) => (
						<div
							key={index}
							className="testimonial-card min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[700px] bg-card rounded-xl p-8 md:p-10 flex flex-col justify-between gap-6 snap-start shadow-lg border border-[#252e43]">
							<Text
								as="p"
								className="italic text-[1.5rem] md:text-2xl text-dimlight font-serif leading-relaxed mb-8">
								"{truncateText(testimonial.testimony, index)}"
							</Text>
							{testimonial.testimony.length > maxLength && (
								<button
									onClick={() => openModal(index)}
									className="font-bold text-base mt-2 flex items-center gap-2 text-light hover:text-primary transition-colors">
									Show more
									<span className="text-primary text-lg">✖</span>
								</button>
							)}
							<div className="mt-4">
								<Text
									as="p"
									className="font-serif text-light text-xl mb-1">
									{testimonial.name}
								</Text>
								<Text
									as="p"
									className="text-primary text-base">
									{testimonial.position}
								</Text>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				<div className="flex items-center justify-end gap-2 py-6 md:py-10">
					<span
						onClick={() => handleArrowClick("left")}
						className="cursor-pointer w-fit p-3 arrow-hover rounded-full">
						<FaArrowLeft />
					</span>
					<span
						onClick={() => handleArrowClick("right")}
						className="cursor-pointer w-fit p-3 arrow-hover rounded-full">
						<FaArrowRight />
					</span>
				</div>
			</div>

			{/* Modal for full testimonial */}
			<AnimatePresence>
				{modalIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
							className="relative bg-card rounded-2xl shadow-2xl p-8 md:p-14 max-w-3xl w-full mx-4">
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 text-2xl text-dimlight hover:text-primary transition-colors">
								&times;
							</button>
							<Text
								as="p"
								className="italic text-[1.5rem] md:text-2xl text-dimlight font-serif leading-relaxed mb-8">
								"{TestimonialData[modalIndex].testimony}"
							</Text>
							<Text
								as="p"
								className="font-serif text-light text-xl mb-1">
								{TestimonialData[modalIndex].name}
							</Text>
							<Text
								as="p"
								className="text-primary text-base">
								{TestimonialData[modalIndex].position}
							</Text>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
