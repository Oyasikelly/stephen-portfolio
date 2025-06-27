"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnyArticle from "./AnyArticle";

interface ArticleProps {
	id: string;
	title: string;
	link: string;
	content: string[];
	sections: { id: string; title: string }[];
}

export default function AnimatedArticle({ content, sections }: ArticleProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	return (
		<div
			ref={containerRef}
			className="relative">
			{sections.map((section, i) => {
				// Calculate the y-offset based on scroll progress
				const y = useTransform(
					scrollYProgress,
					[0, 0.2, 0.8, 1],
					[100, -50 * i, -50 * i, -100 * (i + 1)]
				);

				// Calculate opacity based on scroll progress
				const opacity = useTransform(
					scrollYProgress,
					[0, 0.1, 0.9, 1],
					[0, 1, 1, 0]
				);

				// Calculate scale for a subtle zoom effect
				const scale = useTransform(
					scrollYProgress,
					[0, 0.2, 0.8, 1],
					[0.95, 1, 1, 0.95]
				);

				return (
					<motion.section
						key={section.id}
						id={section.id}
						style={{
							y,
							opacity,
							scale,
							position: "relative",
							zIndex: sections.length - i,
						}}
						className="max-w-4xl mx-auto mt-10">
						<motion.h2
							className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}>
							{section.title}
						</motion.h2>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
							className="py-4 text-base md:text-lg text-white/60">
							{content[i]?.includes("$40 billion USD") ? (
								<ul>
									<li className="flex gap-1 items-center text-[11px] md:text-base">
										<h3 className="font-semibold">Valuation</h3> -
										<span className="text-white/60">{content[i]}</span>
									</li>
								</ul>
							) : (
								<p className="py-4 text-base md:text-lg text-white/60">
									{content[i]}
								</p>
							)}
						</motion.div>
					</motion.section>
				);
			})}

			{/* Next Projects Section */}
			<motion.section
				id="hobbies"
				className="mt-8 md:mt-10 max-w-4xl mx-auto"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: sections.length * 0.1 }}>
				<motion.h2
					className="text-md md:text-xl font-bold border-b-2 border-[#252e43] pb-2"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: sections.length * 0.1 + 0.2 }}>
					NEXT PROJECTS
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: sections.length * 0.1 + 0.4 }}>
					<AnyArticle
						id=""
						title=""
						link=""
						content={content}
						sections={sections}
					/>
				</motion.div>
			</motion.section>
		</div>
	);
}
