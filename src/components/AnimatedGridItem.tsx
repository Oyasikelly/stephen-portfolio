"use client";

import { motion, Variants, easeInOut } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGridItemProps {
	children: ReactNode;
	index: number;
	className?: string;
}

const variants: Variants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.1,
			ease: easeInOut,
		},
	},
};

export default function AnimatedGridItem({
	children,
	index,
	className = "",
}: AnimatedGridItemProps) {
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="visible"
			className={className}
			style={{ transitionDelay: `${index * 0.1}s` }}>
			{children}
		</motion.div>
	);
}
