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
	} button transition-all duration-500 group`;

	const arrowIcon = (
		<FaArrowRight className="transition-transform duration-500 group-hover:rotate-[-60deg]" />
	);

	return url ? (
		<Link href={url}>
			<button
				className={buttonClass}
				onClick={onClick}>
				{children}
				{variant === "outline" && arrowIcon}
			</button>
		</Link>
	) : (
		<button
			className={buttonClass}
			onClick={onClick}>
			{children}
			{variant === "outline" && arrowIcon}
		</button>
	);
};

export default Button;
