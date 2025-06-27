"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
	children: React.ReactNode;
	variant?: "default" | "outline" | "ghost";
	url?: string;
	onClick?: () => void;
	showArrow?: boolean;
	className?: string;
}

const Button = ({
	url,
	children,
	variant = "default",
	onClick,
	showArrow = false,
	className = "",
}: ButtonProps) => {
	const baseStyles = `
		group inline-flex items-center justify-center gap-2
		font-semibold text-sm sm:text-base md:text-lg
		px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4
		rounded-full transition-all duration-300 ease-in-out
	`;

	let variantStyles = "";

	if (variant === "outline") {
		variantStyles = `
			border border-[#C6E1F5]/50 text-white 
			hover:bg-[#C6E1F5] hover:text-[#0E0F11]
		`;
	} else if (variant === "ghost") {
		variantStyles = `
			border border-[#ffffffcb] text-white rounded-xl
			hover:bg-[#ffffff10] hover:border-white hover:text-white
		`;
	} else {
		// default
		variantStyles = `
			bg-[#C6E1F5] text-[#0E0F11] 
			hover:bg-[#C6E1F580]
		`;
	}

	const arrowIcon = showArrow ? (
		<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12" />
	) : null;

	const combinedClass = `${baseStyles} ${variantStyles} ${className}`.trim();

	if (url) {
		return (
			<Link href={url}>
				<button
					className={combinedClass}
					onClick={onClick}>
					{children}
					{arrowIcon}
				</button>
			</Link>
		);
	}

	return (
		<button
			className={combinedClass}
			onClick={onClick}>
			{children}
			{arrowIcon}
		</button>
	);
};

export default Button;
