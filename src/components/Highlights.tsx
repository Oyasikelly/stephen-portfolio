// components/Highights.tsx
import { ReactNode, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Text } from "./Text";

const TypingParagraph = ({
	text,
	delay = 0,
	speed = 30,
}: {
	text: string;
	delay?: number;
	speed?: number;
}) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [isTypingComplete, setIsTypingComplete] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (sectionRef.current) {
	// 			const rect = sectionRef.current.getBoundingClientRect();
	// 			const windowHeight = window.innerHeight;

	// 			// Start typing when section is 50% visible
	// 			if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
	// 				setIsVisible(true);
	// 			}

	// 			// Complete typing when user reaches the end of the section
	// 			if (rect.bottom < windowHeight * 0.8) {
	// 				setIsTypingComplete(true);
	// 			}
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	handleScroll(); // Check initial position

	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	// useEffect(() => {
	// 	if (isVisible && !isTypingComplete && currentIndex < text.length) {
	// 		const timeout = setTimeout(() => {
	// 			setDisplayText((prev) => prev + text[currentIndex]);
	// 			setCurrentIndex((prev) => prev + 1);
	// 		}, speed);

	// 		return () => clearTimeout(timeout);
	// 	} else if (isTypingComplete && currentIndex < text.length) {
	// 		// Complete the typing immediately when user reaches the end
	// 		setDisplayText(text);
	// 		setCurrentIndex(text.length);
	// 	}
	// }, [currentIndex, text, speed, isVisible, isTypingComplete]);

	// useEffect(() => {
	// 	if (isVisible && !isTypingComplete) {
	// 		setCurrentIndex(0);
	// 		setDisplayText("");
	// 	}
	// }, [isVisible, isTypingComplete, text]);

	return (
		<motion.div
			ref={sectionRef}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay }}
			className="py-4 text-base md:text-lg text-white/60">
			{displayText}
		</motion.div>
	);
};

const Highlights = () => {
	return (
		<>
			<section id="highlights">
				<Text
					as="p"
					className="mt-6">
					A Global Talent awardee based in London, United Kingdom that is a
					self-taught Frontend Heavy Fullstack Software Engineer that builds
					products with an end-to-end perspective, with background in Electrical
					& Electronics Engineering, experience in Product Design and backend
					development, his implementations are usually classified as
					pixel-perfect & eye-candy due to how he factors intuitive
					human-centered experiences with a well thought-out business logic.
				</Text>
			</section>

			<section
				id="communities"
				className="mt-8 md:mt-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Communities
				</motion.h2>
				<Text as="p">
					I contribute to many communities in different forms, to mention a few,
					I am a contributor/mentor at"
				</Text>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					<img
						src="/assets/testimonial.png"
						alt="testifier"
						className="w-full object-contain rounded-sm mt-4"
					/>
				</motion.div>
			</section>

			<section
				id="journey"
				className="mt-8 md:mt-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Journey
				</motion.h2>
				<Text as="p">
					He is currently building the future of embedded finance with Montie
					delivering SDKs and APIs that transforms businesses with fully fledged
					invoicing, AP/AR functionalities and automations.\n\nHe was previously
					at checkout.com facilitating secure payments across the world,
					fighting fraud, and maximizing approval rates, read more about
					his...\n\nCheckout.com is an international financial technology
					company which processes payments for other companies. Founded as Opus
					Payments in 2009, it is headquartered in London, United Kingdom. It
					had a valuation of $40 billion USD in 2022, making it the most
					valuable European fintech startup.\n\nPrior to checkout.com, he worked
					at Kloud Commerce (formerly PayPecker) as the Frontend Lead, where he
					collaboratively pioneered the development of a customer-facing and
					merchant-facing e-commerce/FinTech solution which facilitated
					synchronized sales data across multiple channels (e.g. Woo-Commerce
					and Point of Sales (P.O.S) outlets in multiple locations) with
					internal tools for administrative management e.g. handling Know Your
					Customer (K.Y.C) processes, read more about his...\n\nOver the years,
					he has consulted for and worked with different companies in diverse
					industries & sectors like Advertising & Marketing, Oil & gas,
					Education e.t.c in designing and building solutions from the ground up
					through the SDLC (Software Development Life Cycle) from
					conceptualisation/ideation phase to production stage with the
					comapny's OKPs (Objective Key Results) in view."
				</Text>
			</section>

			<section
				id="hobbies"
				className="mt-8 md:mt-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.7 }}
					className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
					Hobbies
				</motion.h2>
				<Text as="p">
					He is a music lover and a creative that enjoys travelling, exploring
					and appreciates art. Whenever he is not writing code, designing,
					building or learning something, he is probably playing video games
					(usually Call of Duty Mobile (COD) and car racing games e.g. F1), or
					swimming, cycling, playing a game of snooker, catching up with family,
					friends and acquaintances or maybe just eating and sleeping."
				</Text>
			</section>
		</>
	);
};

export default Highlights;
