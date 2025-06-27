"use client";
import { JSX, ReactNode } from "react";
import { motion } from "framer-motion";

export default function PopInOnScroll({
	children,
	className = "",
	as = "div",
	delay = 0,
	duration = 0.8,
	ease = [0.22, 1, 0.36, 1],
}: {
	children: ReactNode;
	className?: string;
	as?: keyof JSX.IntrinsicElements;
	delay?: number;
	duration?: number;
	ease?: number[];
}) {
	const MotionTag = motion[as as keyof typeof motion] as any;
	return (
		<MotionTag
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration, delay, ease }}
			className={className}>
			{children}
		</MotionTag>
	);
}
