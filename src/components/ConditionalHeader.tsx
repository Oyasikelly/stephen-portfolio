"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "../data/NavLinks";
import Header from "./Header";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import Button from "./Button";
import { Text } from "./Text";
import { colors } from "@/libs/styles/colors";

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
										? "relative before:content-['.'] before:text-[#c6e1f5] before:text-4xl before:absolute before:top-0 before:left-5 before:flex"
										: ""
								} text-dimlight font-medium`}>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Toggle */}
					<div className="md:hidden flex justify-end w-full px-6 text-light z-50">
						<div onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <FaTimes size={24} /> : <RiMenu3Fill size={24} />}
						</div>
					</div>
				</header>

				{/* Mobile Menu */}
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
								className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b bg-secondary backdrop-blur-2xl border-l border-[#252e43]/50 shadow-2xl">
								{/* Header */}
								<div className="flex justify-between items-center p-6">
									<Text
										as="h2"
										className="text-light">
										Menu
									</Text>
									<motion.button
										onClick={() => setIsOpen(false)}
										whileHover={{ scale: 1.1, rotate: 90 }}
										whileTap={{ scale: 0.9 }}
										className="text-dimlight">
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
												style={{
													borderBlock: "1px",
													borderColor: `${
														link.href === pathName ? colors.primary : "none"
													}`,
												}}
												className={`block w-full p-4 rounded-xl transition-all duration-300 ${
													link.href === pathName
														? "bg-base text-dimlight border shadow-lg"
														: "menu-hover"
												} text-dimlight`}>
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
										className="w-full flex flex-col gap-4">
										<Button
											variant="default"
											url="tel:+2348130000000"
											className="w-full"
											showArrow>
											Book me
										</Button>
										<Button
											variant="outline"
											url="mailto:yourname@example.com"
											className="w-full"
											showArrow>
											Message me
										</Button>
									</motion.div>
								</motion.div>

								{/* Footer */}
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.8 }}
									className="p-6 text-center text-dimlight text-sm border-t border-[#252e43]/30">
									© {new Date().getFullYear()} Stephen Okuanade
								</motion.div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
				<HorizontalLine />
			</>
		);
	}

	return <Header />;
}
