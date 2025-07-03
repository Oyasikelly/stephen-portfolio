"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ButtonProps {
	children: React.ReactNode;
	variant?: "default" | "outline" | "ghost";
	url?: string;
	onClick?: () => void;
	showArrow?: boolean;
	className?: string;
	disabled?: boolean;
}

const primary = "var(--primary)";
const dark = "#181818";

const Button = ({
	url,
	children,
	variant = "default",
	onClick,
	showArrow = false,
	className = "",
	disabled = false,
}: ButtonProps) => {
	const [hovered, setHovered] = useState(false);

	const baseStyles = `
		group inline-flex items-center justify-center gap-2
		font-semibold text-sm lg:text-base md:text-lg
		px-2 py-2 md:px-4 md:py-1.5
		rounded-md transition-all duration-200
	`;

	let style: React.CSSProperties = {};

	if (variant === "outline") {
		style = {
			border: `1px solid ${primary}`,
			color: hovered ? dark : primary,
			background: hovered ? primary : "transparent",
		};
	} else if (variant === "ghost") {
		style = {
			border: `1px solid ${primary}`,
			color: primary,
			background: hovered ? "var(--card)" : "var(--secondary)", // fallback tan with opacity
		};
	} else {
		// default
		style = {
			background: primary,
			color: dark,
			border: `1px solid ${primary}`,
			opacity: hovered ? 0.9 : 1,
		};
	}

	const arrowIcon = showArrow ? (
		<FaArrowUpRightFromSquare
			style={{
				color: hovered ? "var(--secondary)" : "var(--primary)",
				transition: "0.3s color easeOut",
			}}
			className="ml-1 text-inherit"
		/>
	) : null;

	const combinedClass = `${baseStyles} ${className}`.trim();

	const handleMouseEnter = () => setHovered(true);
	const handleMouseLeave = () => setHovered(false);

	if (url) {
		return (
			<Link
				href={url}
				className={combinedClass}
				style={style}
				onClick={onClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				{children}
				{arrowIcon}
			</Link>
		);
	}

	return (
		<button
			className={`${combinedClass} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			style={style}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			disabled={!!disabled}>
			{children}
			{arrowIcon}
		</button>
	);
};

export default Button;
