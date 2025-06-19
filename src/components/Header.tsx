"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/NavLinks";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

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
									? "relative before:content-['.'] before:text-[#9bbce5] before:text-4xl before:absolute before:top-5 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:flex before:justify-center before:items-center"
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
					<motion.div
						onClick={() => setIsOpen(!isOpen)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="cursor-pointer">
						{isOpen ? (
							<FaTimes
								className="border-animate rounded-full p-1"
								size={26}
							/>
						) : (
							<RiMenu3Fill
								className="border-animate rounded-full p-1"
								size={26}
							/>
						)}
					</motion.div>
				</div>
			</header>

			{/* Fancy Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden fixed inset-0 z-50 h-screen w-full">
						{/* Blur Background */}
						<motion.div
							initial={{ backdropFilter: "blur(0px)" }}
							animate={{ backdropFilter: "blur(20px)" }}
							exit={{ backdropFilter: "blur(0px)" }}
							transition={{ duration: 0.4 }}
							className="absolute inset-0 bg-black/40 backdrop-blur-2xl"
							onClick={() => setIsOpen(false)}
						/>

						{/* Menu Content */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#080d18]/95 to-[#111724]/95 backdrop-blur-2xl border-l border-[#252e43]/50 shadow-2xl">
							{/* Header */}
							<div className="flex justify-between items-center p-6 border-b border-[#252e43]/30">
								<motion.h2
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className="text-xl font-bold text-white">
									Menu
								</motion.h2>
								<motion.button
									onClick={() => setIsOpen(false)}
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
									className="text-white/70 hover:text-white transition-colors">
									<FaTimes size={20} />
								</motion.button>
							</div>

							{/* Navigation Links */}
							<nav className="flex flex-col p-6 space-y-2">
								{navLinks.map((link, index) => (
									<motion.div
										key={link.href}
										initial={{ opacity: 0, x: 50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className="relative">
										<Link
											href={link.href}
											onClick={() => setIsOpen(false)}
											className={`block w-full p-4 rounded-xl transition-all duration-300 ${
												link.href === pathName
													? "bg-[#9bbce5]/20 text-[#9bbce5] border border-[#9bbce5]/30 shadow-lg shadow-[#9bbce5]/10"
													: "text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
											}`}>
											<div className="flex items-center justify-between">
												<span className="font-medium">{link.label}</span>
												{link.href === pathName && (
													<motion.div
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														transition={{ delay: 0.5 + index * 0.1 }}
														className="w-2 h-2 bg-[#9bbce5] rounded-full"
													/>
												)}
											</div>
										</Link>
									</motion.div>
								))}
							</nav>

							{/* Action Buttons */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="p-6 space-y-4 border-t border-[#252e43]/30 mt-auto">
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full">
									<Link href="tel:+2348130000000">
										<button className="w-full bg-gradient-to-r from-[#9bbce5] to-[#7ba8d4] text-[#080d18] font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#9bbce5]/20 hover:shadow-[#9bbce5]/40 transition-all duration-300 transform hover:-translate-y-1">
											Book call
										</button>
									</Link>
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full">
									<Link href="/mailto:yourname@example.com">
										<button className="w-full border-2 border-[#9bbce5] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#9bbce5] hover:text-[#080d18] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
											Message me
											<FaArrowRight className="transition-transform group-hover:translate-x-1" />
										</button>
									</Link>
								</motion.div>
							</motion.div>

							{/* Footer */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
								className="p-6 text-center text-white/40 text-sm border-t border-[#252e43]/30">
								© 2024 Stephen Okuanade
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="h-[2px] bg-gradient-to-r from-black via-[#ffffffb4] to-black"></div>
		</>
	);
}
