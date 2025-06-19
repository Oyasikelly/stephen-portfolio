"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
	text: string;
	speed?: number;
	className?: string;
}

const variants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			damping: 12,
			stiffness: 100,
		},
	},
};

export default function TypingText({
	text,
	speed = 0.05,
	className = "",
}: TypingTextProps) {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed * 1000);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, speed]);

	return (
		<motion.span
			variants={variants}
			initial="hidden"
			animate="visible"
			className={className}>
			{displayText}
		</motion.span>
	);
}
