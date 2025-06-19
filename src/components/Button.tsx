// components/Button.tsx
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
	children: React.ReactNode;
	variant?: "default" | "outline";
	url?: string;
	asLink?: boolean;
	onClick?: () => void;
}

const Button = ({
	url,
	children,
	variant = "default",
	onClick,
}: ButtonProps) => {
	const buttonClass = `${
		variant === "outline" ? "outline" : ""
	} border-animate flex flex-shrink-0 items-center text-base md:text-xl gap-2 border-1 border-[#9bbce5] text-white font-bold py-3 px-4 md:py-2 md:px-6 rounded-full hover:bg-[#9bbce5] hover:text-[#080d18]  transition-all duration-500 group`;

	const arrowIcon = (
		<FaArrowRight className="animate-arrow-3 transition-transform duration-500 group-hover:rotate-[-60deg]" />
	);

	return url ? (
		<Link href="tel:+2348130000000">
			<button
				className={buttonClass}
				onClick={onClick}>
				{children}
				{variant === "outline" && arrowIcon}
			</button>
		</Link>
	) : (
		<Link href="/restricted">
			<button
				className={buttonClass}
				onClick={onClick}>
				{children}
				{variant === "outline" && arrowIcon}
			</button>
		</Link>
	);
};

export default Button;
