"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "../data/NavLinks";
import Header from "./Header";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

export default function ConditionalHeader() {
	const pathName = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	if (pathName === "/") {
		return (
			<>
				<header className="flex justify-center items-center px-6 md:px-40 py-10 w-full h-[91px] mx-auto">
					<nav className="hidden md:flex items-center gap-12">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`${
									link.href === pathName
										? "relative before:content-['.'] before:text-[#9bbce5] before:text-4xl before:absolute before:top-0 before:left-5 before:flex"
										: ""
								} font-medium`}>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Toggle */}
					<div className="md:hidden flex justify-end w-full px-6 text-white z-50">
						<div onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <FaTimes size={24} /> : <RiMenu3Fill size={24} />}
						</div>
					</div>
				</header>

				{/* Mobile Menu */}
				<div
					className={`md:hidden fixed top-[91px] left-0 w-full bg-[#0a0a0a] transition-all duration-300 ease-in-out z-40 ${
						isOpen
							? "max-h-screen opacity-100"
							: "max-h-0 overflow-hidden opacity-0"
					}`}>
					<nav className="flex flex-col items-center gap-6 py-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className={`${
									link.href === pathName
										? "relative before:content-['.'] before:text-[#9bbce5] before:text-4xl before:absolute before:top-0 before:left-5 before:flex"
										: ""
								} font-medium text-white`}>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
				<div className="h-[2px] bg-gradient-to-r from-black via-[#ffffffb4] to-black"></div>
			</>
		);
	}

	return <Header />;
}
