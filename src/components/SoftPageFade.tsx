"use client";
import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { usePageTransition } from "@/context/PageTransitionContext";

export default function SoftPageFade({ children }: { children: ReactNode }) {
	const controls = useAnimation();
	const { transitionComplete } = usePageTransition();

	useEffect(() => {
		if (transitionComplete) {
			controls.set({ opacity: 0, y: 40 });
			controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
			});
		}
	}, [transitionComplete, controls]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={controls}
			style={{ width: "100%" }}>
			{children}
		</motion.div>
	);
}
