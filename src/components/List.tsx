import React, { useRef } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import { motion, useScroll, useTransform } from "framer-motion";
import { Text } from "./Text";
import featuredProjects from "@/data/FeaturedProjects";
import Projects from "./Projects";

export default function List({ visibleCount = 4 }) {
	const sectionRef = useRef(null);

	// Track scroll progress of the section
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"], // 0 when top hits top, 1 when bottom hits top
	});

	// Fade in as it becomes sticky, fade out as it leaves
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.05, 0.95, 1],
		[0, 1, 1, 0]
	);

	return (
		<section
			ref={sectionRef}
			className="relative w-full -top-32 ">
			<motion.div
				style={{
					position: "sticky",
					top: 0,
					zIndex: 0,
					opacity,
				}}>
				<Text
					as="h3"
					className="py-4 text-center text-dimlight font-serif">
					PROJECTS
				</Text>
			</motion.div>
			<Projects data={featuredProjects.slice(0, visibleCount)} />
		</section>
	);
}
