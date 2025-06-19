"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCard from "./AnimatedCard";
import { FeaturedProjects } from "./FeaturedProjects";

interface StackedCardsProps {
	projects: {
		title: string;
		image: string;
		description: string;
		link: string;
	}[];
}

export function StackedCards({ projects }: StackedCardsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	// The scroll area is (number of cards + 1) * 100vh for smooth stacking
	const minHeight = (projects.length + 1) * 100;
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	if (!projects || projects.length === 0) {
		return (
			<div className="text-center text-red-500 py-10">
				No projects to display.
			</div>
		);
	}
	return (
		<div
			ref={containerRef}
			className={`relative min-h-[${minHeight}vh]`}>
			<div className="sticky top-0 h-screen w-full flex items-center justify-center">
				<div className="relative w-full h-full">
					{projects.map((project, index) => {
						// Each card gets its own scroll window
						const total = projects.length;
						const start = index / (total + 1);
						const end = (index + 1) / (total + 1);
						// Animate in during its window, out after
						const cardProgress = useTransform(
							scrollYProgress,
							[start, end],
							[0, 1]
						);
						const opacity = useTransform(
							cardProgress,
							[0, 0.2, 0.8, 1],
							[0, 1, 1, 0]
						);
						const scale = useTransform(
							cardProgress,
							[0, 0.2, 0.8, 1],
							[0.95, 1, 1, 0.95]
						);
						const y = useTransform(cardProgress, [0, 1], [40, 0]);
						return (
							<motion.div
								key={project.title}
								style={{
									opacity,
									scale,
									y,
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									zIndex: index + 1,
								}}
								className="origin-center">
								<AnimatedCard index={index}>
									<FeaturedProjects
										title={project.title}
										image={project.image}
										index={index}
										link={project.link}>
										{project.description}
									</FeaturedProjects>
								</AnimatedCard>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
