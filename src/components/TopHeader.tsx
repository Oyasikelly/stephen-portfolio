// TopHeader.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { usePageTransition } from "@/context/PageTransitionContext";

interface topHeaderProps {
	title: string;
	page: string;
}

// Custom hook to get responsive width
function useResponsiveBarWidth() {
	const [width, setWidth] = useState("60px");
	useEffect(() => {
		function updateWidth() {
			if (window.innerWidth >= 768) {
				setWidth("70px");
			} else {
				setWidth("60px");
			}
		}
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);
	return width;
}

const TopHeader = ({ title, page }: topHeaderProps) => {
	const width = useResponsiveBarWidth();
	const controls = useAnimation();
	const { transitionComplete } = usePageTransition();

	useEffect(() => {
		if (transitionComplete) {
			controls.set({ width: 0, opacity: 0 });
			controls.start({
				width,
				opacity: 1,
				transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
			});
		}
	}, [width, controls, transitionComplete]);

	return (
		<div className="flex flex-col justify-center items-center px-4">
			<div className="text-center flex justify-center">
				<h1 className="text-2xl  md:text-3xl font-bold  ">{title}</h1>
			</div>
			<div className="my-3 md:my-4 text-white/60">{page ? page : ""}</div>
			<motion.div
				className="h-[4px] md:h-[5px] rounded-full bg-[#9bbce5]"
				initial={{ width: 0, opacity: 0 }}
				animate={controls}
				style={{ width }}
				transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
			/>
		</div>
	);
};
export default TopHeader;
