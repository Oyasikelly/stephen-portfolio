"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
	children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
	const pathname = usePathname();
	const [showOverlay, setShowOverlay] = useState(true);
	const [currentPath, setCurrentPath] = useState(pathname);
	const [showContent, setShowContent] = useState(false);

	// Trigger overlay on route change or reload
	useEffect(() => {
		if (currentPath !== pathname) {
			setShowOverlay(true);
			setShowContent(false);
			setCurrentPath(pathname);
		}
	}, [pathname, currentPath]);

	// Dismiss overlay and then show content
	useEffect(() => {
		if (showOverlay) {
			const timeout = setTimeout(() => {
				setShowOverlay(false);
				setShowContent(true); // reveal content AFTER overlay finishes
			}, 2500); // matches animation duration + typing time

			return () => clearTimeout(timeout);
		}
	}, [showOverlay]);

	// On first load
	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowOverlay(false);
			setShowContent(true);
		}, 2500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">
				{showOverlay && (
					<motion.div
						key={`page-transition-${pathname}`}
						initial={{ y: 0 }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-[#080d18] text-white flex flex-col items-center justify-center">
						<motion.h2
							initial={{ opacity: 1, y: 0 }}
							animate={{ opacity: 0, y: 20 }}
							transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
							className="text-2xl font-bold mb-4">
							STEPHEN OKUANADE
						</motion.h2>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Only show content AFTER overlay exits */}
			{showContent && children}
		</>
	);
}
