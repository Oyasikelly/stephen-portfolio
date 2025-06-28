import React, { useRef, useLayoutEffect, useState } from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import portfolioPreviews from "@/data/portfolioPreviews";
import { Text } from "./Text";

export default function List() {
	const overlap = 48; // Overlap distance between cards
	const base = 50; // Base offset from the top
	const n = portfolioPreviews.length;
	const cardRef = useRef<HTMLDivElement>(null);
	const [cardHeight, setCardHeight] = useState(400); // Default fallback
	const [containerHeight, setContainerHeight] = useState(1200); // Default fallback

	useLayoutEffect(() => {
		function updateHeights() {
			if (cardRef.current) {
				const measuredCardHeight = cardRef.current.offsetHeight;
				setCardHeight(measuredCardHeight);
				const lastCardTopOffset = base + (n - 2) * overlap;
				const newContainerHeight =
					window.innerHeight + lastCardTopOffset + measuredCardHeight - base;
				setContainerHeight(newContainerHeight);
			}
		}
		updateHeights();
		window.addEventListener("resize", updateHeights);
		return () => window.removeEventListener("resize", updateHeights);
	}, [n]);

	return (
		<section
			className="relative w-full"
			style={{ minHeight: `${containerHeight}px` }}>
			<Text
				as="h3"
				className="sticky top-0 z-10 py-4 mb-4 text-center text-dimlight">
				FEATURED PROJECTS
			</Text>

			<div className="relative w-full h-full">
				{portfolioPreviews.map((project, index) => (
					<div
						key={project.title}
						ref={index === 0 ? cardRef : undefined}
						style={{
							position: "sticky",
							top:
								index === n - 1
									? `${base + (n - 2) * overlap}px`
									: `${base + 300 * overlap}px`,
							zIndex: index + 1,
							marginBottom: "0px",
						}}
						className="transition-shadow duration-300">
						<FeaturedProjects
							title={project.title}
							image={project.image}
							link={project.link}
							index={index}>
							{project.description}
						</FeaturedProjects>
					</div>
				))}
			</div>
		</section>
	);
}
