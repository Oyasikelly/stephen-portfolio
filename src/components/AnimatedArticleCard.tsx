"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AnimatedArticleCardProps {
	children: React.ReactNode;
	index: number;
	isVisible: boolean;
	key?: string | number;
}

const directions = [
	{ x: -60, y: 0 }, // left
	{ x: 60, y: 0 }, // right
	{ x: 0, y: -60 }, // up
	{ x: 0, y: 60 }, // down
];

export default function AnimatedArticleCard({
	children,
	index,
	isVisible,
}: AnimatedArticleCardProps) {
	const dir = directions[index % directions.length];
	return (
		<AnimatePresence mode="wait">
			{isVisible && (
				<motion.div
					key={index}
					initial={{ opacity: 0, ...dir }}
					animate={{ opacity: 1, x: 0, y: 0 }}
					exit={{ opacity: 0, ...dir }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full">
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
