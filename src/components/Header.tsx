"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/NavLinks";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
	const pathName = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="flex justify-between items-center px-6 md:px-40 py-10 w-full h-[91px] mx-auto">
				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center w-auto gap-12">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`${
								link.href == pathName
									? "relative before:content-['.'] before:text-[#9bbce5] before:text-4xl before:absolute before:top-0 before:left-5 before:flex"
									: ""
							} font-medium`}>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Desktop Buttons */}
				<div className="hidden md:flex gap-4 text-white">
					<Button variant="outline">Book call</Button>
					<Button>Message me</Button>
				</div>

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

					{/* Mobile Buttons */}
					<Button variant="outline">Book call</Button>
					<Button>Message me</Button>
				</nav>
			</div>

			<div className="h-[2px] bg-gradient-to-r from-black via-[#ffffffb4] to-black"></div>
		</>
	);
}
