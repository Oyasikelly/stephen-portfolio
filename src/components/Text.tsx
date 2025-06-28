"use client";
import { motion, MotionProps } from "framer-motion";
import { typography } from "@/libs/styles/typography";
import React from "react";

type TextTag = "h1" | "h2" | "h3" | "h4" | "p";

interface AnimatedTextProps extends MotionProps {
	as?: TextTag;
	className?: string;
	children: React.ReactNode;
	once?: boolean;
}

const baseMotion = {
	initial: { opacity: 0, y: 10 },
	whileInView: { opacity: 1, y: 0 },
};

export const Text = ({
	as = "p",
	className = "",
	children,
	once = true,
	...motionProps
}: AnimatedTextProps) => {
	const Tag = motion[as]; // dynamic motion tag

	const base =
		as === "h1"
			? typography.h1
			: as === "h2"
			? typography.h2
			: as === "h3"
			? typography.h3
			: as === "h4"
			? typography.h4
			: typography.paragraph;

	const font = as === "p" ? typography.body : typography.heading;

	return (
		<Tag
			{...baseMotion}
			viewport={{ once }}
			transition={{ duration: 0.3, delay: 0.2 }}
			className={`${base} ${font} ${className}`}
			{...motionProps}>
			{children}
		</Tag>
	);
};
