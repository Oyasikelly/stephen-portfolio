"use client";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";

const footerLinks = [
	{ name: "Email", href: "#" },
	{ name: "LinkedIn", href: "#" },
	{ name: "GitHub", href: "#" },
	{ name: "Medium", href: "#" },
];

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className=" relative z-30 bg-secondary font-serif">
			<div className="h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>

			<div className="max-w-7xl my-4 mx-auto px-4 sm:px-6">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
					<p className="text-sm text-gray-500 order-2 md:order-1">
						Copyright © {new Date().getFullYear()}
					</p>

					<div className="flex flex-col md:flex-row items-center gap-4 order-1 md:order-2">
						<div className="flex flex-wrap justify-center gap-2 md:gap-4">
							{footerLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-sm hover:underline hover:text-white/30 transition-colors duration-300">
									{link.name}
								</Link>
							))}
						</div>

						<span
							onClick={scrollToTop}
							className="cursor-pointer w-fit p-3 hover:text-white/30 hover:bg-base rounded-xl transition-all duration-300 ease-in-out">
							<FaArrowUp />
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
