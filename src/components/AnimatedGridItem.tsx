"use client";

import { motion, Variants, easeInOut } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGridItemProps {
	children: ReactNode;
	index: number;
	className?: string;
}

const variants: Variants = {
	hidden: { opacity: 0, y: 16, scale: 0.98 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.8,
			delay: i * 0.1,
			ease: [0.22, 1, 0.36, 1], // cubic-bezier for soft effect
		},
	}),
};

export default function AnimatedGridItem({
	children,
	index,
	className = "",
}: AnimatedGridItemProps) {
	return (
		<motion.div
			custom={index}
			variants={variants}
			initial="hidden"
			animate="visible"
			key={index}
			className={className}>
			{children}
		</motion.div>
	);
}
