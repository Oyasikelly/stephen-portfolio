import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HorizontalLine from "./HorizontalLine";

export default function FavouriteTools() {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: false,
		amount: 0.2,
		margin: "-100px 0px -100px 0px",
	});

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	};
	return (
		<section
			className="py-8 md:py-16"
			ref={ref}>
			<HorizontalLine />
			<div className="max-w-7xl mx-auto py-10 md:py-20 px-4 sm:px-6">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
					FAVOURITE TOOLS
				</motion.h2>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 place-items-center gap-2  mx-auto">
					{[
						{ icon: "/Favourite_tools/figma.png" },
						{ icon: "/Favourite_tools/nuxtjs.png" },
						{ icon: "/Favourite_tools/nodejs.png" },
						{ icon: "/Favourite_tools/nextjs.png" },
						{ icon: "/Favourite_tools/aws.png" },
						{ icon: "/Favourite_tools/reactjs.png" },
						{ icon: "/Favourite_tools/typescript.png" },
						{ icon: "/Favourite_tools/vue.png" },
					].map((tool, index) => (
						<motion.div
							key={1 + index}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
							className="rounded-lg p-1 text-center flex-shrink-0 lg:w-16 lg:h-16 w-12 h-12}">
							<img
								src={`/assets/${tool.icon}`}
								alt={tool.icon.split("/").pop()?.split(".")[0] || "Tool Icon"}
								loading="lazy"
								className="w-full h-full object-contain"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			<HorizontalLine />
		</section>
	);
}
