"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedCardProps {
	children: React.ReactNode;
	index?: number;
}

export default function AnimatedCard({
	children,
	index = 0,
}: AnimatedCardProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: false,
		margin: "-100px",
	});

	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.95,
			x: index % 2 === 0 ? -20 : 20, // Alternate between left and right
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				delay: index * 0.1, // Staggered delay based on index
			},
		},
		exit: {
			opacity: 0,
			y: -50,
			scale: 0.95,
			x: index % 2 === 0 ? -20 : 20,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			exit="exit"
			variants={variants}>
			{children}
		</motion.div>
	);
}
