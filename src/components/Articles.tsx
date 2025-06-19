// Articles.tsx
"use client";

import articles from "@/data/articles";
import { FaClock } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function Article() {
	const getAnimationDirection = (index: number) => {
		const directions = [
			{ initial: { opacity: 0, y: 100 }, exit: { opacity: 0, y: -100 } }, // up
			{ initial: { opacity: 0, x: -100 }, exit: { opacity: 0, x: 100 } }, // left
			{ initial: { opacity: 0, y: -100 }, exit: { opacity: 0, y: 100 } }, // down
			{ initial: { opacity: 0, x: 100 }, exit: { opacity: 0, x: -100 } }, // right
		];
		return directions[index % 4];
	};

	return (
		<AnimatePresence mode="wait">
			{articles.map((article, index) => {
				const direction = getAnimationDirection(index);
				return (
					<motion.div
						key={1 + index}
						initial={direction.initial}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						exit={direction.exit}
						viewport={{ margin: "-100px" }}
						transition={{
							duration: 0.5,
							delay: index * 0.1,
							type: "spring",
							stiffness: 100,
						}}
						className={`skill-border-animate skill-border-animate-${
							1 + index
						} w-full bg-[#252e43] rounded-xl p-4`}>
						<motion.div
							className="h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}>
							<motion.img
								className="w-full h-full object-cover rounded-xl"
								src={article.img}
								alt={article.title}
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-4">
							<motion.span
								className="text-white/50 flex items-center gap-2 text-sm md:text-base"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 20 }}
								viewport={{ margin: "-100px" }}
								transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}>
								<FaClock /> {article.time} min{article.time > 1 ? "s" : ""} read
							</motion.span>
							<motion.button
								className="rounded-xl p-2 md:p-3 border border-white text-sm md:text-base"
								whileHover={{
									scale: 1.05,
									backgroundColor: "rgba(255, 255, 255, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}>
								{article.title}
							</motion.button>
						</div>
						<motion.p
							className="mt-2 text-sm md:text-base"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							viewport={{ margin: "-100px" }}
							transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}>
							{article.description}
						</motion.p>
					</motion.div>
				);
			})}
		</AnimatePresence>
	);
}
