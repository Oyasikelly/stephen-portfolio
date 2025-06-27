"use client";

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
			style={{ minHeight: minHeight + "vh" }}
			className="relative">
			<div className="relative w-full h-full">
				{projects.map((project, index) => (
					<div
						key={project.title}
						style={{
							position: "sticky",
							top: 0,
							zIndex: index + 1,
							marginBottom: index !== projects.length - 1 ? "-60px" : undefined,
						}}
						className="transition-shadow duration-300">
						<AnimatedCard index={index}>
							<FeaturedProjects
								title={project.title}
								image={project.image}
								index={index}
								link={project.link}>
								{project.description}
							</FeaturedProjects>
						</AnimatedCard>
					</div>
				))}
			</div>
		</div>
	);
}
