"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingCursor = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
			setIsVisible(true);
		};

		const handleMouseLeave = () => {
			setIsVisible(false);
		};

		const handleMouseEnter = () => {
			setIsVisible(true);
		};

		const handleTouchStart = (event: TouchEvent) => {
			const touch = event.touches[0];
			setMousePosition({ x: touch.clientX, y: touch.clientY });
			setIsVisible(true);
		};

		const handleTouchMove = (event: TouchEvent) => {
			const touch = event.touches[0];
			setMousePosition({ x: touch.clientX, y: touch.clientY });
			setIsVisible(true);
		};

		const handleTouchEnd = () => {
			setIsVisible(false);
		};

		// Mouse events for desktop
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("mouseenter", handleMouseEnter);

		// Touch events for mobile
		window.addEventListener("touchstart", handleTouchStart);
		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	return (
		<motion.div
			className="fixed w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full pointer-events-none z-50"
			style={{
				position: "fixed",
				pointerEvents: "none",
				background:
					"radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(189,218,254,0.08) 30%, rgba(155,188,229,0.05) 60%, transparent 100%)",
			}}
			animate={{
				x: mousePosition.x - 75,
				y: mousePosition.y - 75,
				opacity: isVisible ? 1 : 0,
				scale: isVisible ? 1 : 0.3,
			}}
			transition={{
				type: "spring",
				stiffness: 150,
				damping: 15,
				mass: 0.5,
			}}
		/>
	);
};

export default FloatingCursor;
