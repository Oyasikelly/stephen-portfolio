import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

const AnimatedSection = ({
	children,
	className = "",
	delay = 0,
}: AnimatedSectionProps) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	const scale = useTransform(
		scrollYProgress,
		[0, 0.2, 0.8, 1],
		[0.8, 1, 1, 0.8]
	);
	const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100, scale: 0.8 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: delay,
				ease: [0.22, 1, 0.36, 1],
			}}
			style={{ opacity, scale, y }}
			className={className}>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
