"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon } from "@/data/Icons";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

const TypingText = ({
	text,
	delay = 0,
	speed = 70,
}: {
	text: string;
	delay?: number;
	speed?: number;
}) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isVisible && currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, speed, isVisible]);

	useEffect(() => {
		if (isVisible) {
			setCurrentIndex(0);
			setDisplayText("");
		}
	}, [isVisible, text]);

	return (
		<motion.span
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsVisible(true)}
			transition={{ duration: 0.2, delay: delay / 1000 }}
			className="text-[#ffffffb4] text-lg sm:text-xl">
			{displayText}
		</motion.span>
	);
};

const TypingHeading = ({
	text,
	delay = 0,
	speed = 90,
}: {
	text: string;
	delay?: number;
	speed?: number;
}) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isVisible && currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, speed, isVisible]);

	useEffect(() => {
		if (isVisible) {
			setCurrentIndex(0);
			setDisplayText("");
		}
	}, [isVisible, text]);

	return (
		<motion.h1
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsVisible(true)}
			transition={{ duration: 0.2, delay: delay / 1000 }}
			className="text-5xl lg:text-8xl mt-6 md:mt-4 font-bold mb-4 md:mb-6">
			{displayText}
		</motion.h1>
	);
};

const TypingParagraph = ({
	text,
	delay = 0,
	speed = 50,
}: {
	text: string;
	delay?: number;
	speed?: number;
}) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isVisible && currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, speed, isVisible]);

	useEffect(() => {
		if (isVisible) {
			setCurrentIndex(0);
			setDisplayText("");
		}
	}, [isVisible, text]);

	return (
		<motion.p
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsVisible(true)}
			transition={{ duration: 0.2, delay: delay / 1000 }}
			className="text-[#ffffffb4] text-base sm:text-lg mt-4">
			{displayText}
		</motion.p>
	);
};

const HeroSection = () => {
	return (
		<motion.section className="px-4 sm:px-6 md:px-20 lg:px-40">
			<div className="py-10 md:py-20">
				<div className="w-auto mx-auto flex flex-col md:flex-row items-center">
					<div className="w-full md:max-w-[50%] md:w-1/2 mb-10 md:mb-0 px-4 md:px-0">
						<TypingText
							text="Hey there 👋 I'm Stephen Okuanade"
							delay={100}
							speed={60}
						/>
						<TypingHeading
							text="FullStack Developer"
							delay={200}
							speed={90}
						/>
						<TypingParagraph
							text="A Frontend heavy Fullstack Software Engineer that transforms problems into scalable solutions with design & technology for intuitive human-centered experiences, read more about me"
							delay={100}
							speed={80}
						/>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.8 }}
							className="flex flex-wrap gap-4 mt-6">
							<Link href="mailto:yourname@example.com">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-[#9bbce5] border-animate flex flex-shrink-0 items-center text-base md:text-xl gap-2 border-1 border-[#9bbce5] text-[#080d18] font-semibold py-1 px-2 md:py-4 md:px-8 rounded-full hover:bg-[#9bbce5] hover:text-[#080d18]  transition-all duration-500 group">
									Book call
								</motion.button>
							</Link>
							<Link href="tel:+2348130000000">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="border-animate flex flex-shrink-0 items-center text-base md:text-xl gap-2 border-1 border-[#9bbce5] text-white font-semibold py-1 px-2 md:py-4 md:px-8 rounded-full hover:bg-[#9bbce5] hover:text-[#080d18]  transition-all duration-500 group">
									Message me{" "}
									<FaArrowRight className="arrow-animate arrow-animate-2" />{" "}
								</motion.button>
							</Link>
						</motion.div>
					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-end px-4 md:px-0">
						<div className="hidden md:block">
							<motion.div
								initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
								whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
								style={{ borderBottomLeftRadius: "50%" }}
								className="border-2 rounded-xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
								<div className="p-4 sm:p-6 h-full">
									<motion.img
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
										style={{ borderBottomLeftRadius: "50%" }}
										className="w-full h-full object-cover rounded-xl"
										src="/assets/stephen.png"
										alt="Stephen Okuanade"
									/>
								</div>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 1.4 }}
							className="hidden md:flex flex justify-center md:justify-end gap-3 items-center w-48 sm:w-64 md:w-80 mt-4">
							<EmailIcon className="w-6 h-6" />
							<LinkedInIcon className="w-6 h-6" />
							<MediumIcon className="w-6 h-6" />
							<GitHubIcon className="w-6 h-6" />
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
