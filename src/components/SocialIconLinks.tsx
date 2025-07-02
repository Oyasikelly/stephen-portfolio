"use client";

import Icons from "@/data/Icons";
import { motion } from "framer-motion";

export default function SocialIconLinks() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 2.5,
				delay: 0.7,
				ease: "easeOut",
			}}
			className="hidden md:flex flex justify-center md:justify-end gap-3 items-center w-48 sm:w-64 md:w-80 mt-4">
			{Icons.map((icon) => (
				<a
					key={icon.label}
					href={icon.href}
					target="_blank"
					rel="noopener noreferrer"
					className="relative flex flex-col items-center group"
					style={{ minWidth: 32 }}>
					{/* Rope */}
					<span className="rope group-hover:rope-animate" />
					{/* Icon */}
					<span className="icon-wrapper transition-all duration-200 group-hover:scale-110 hover:scale-110 hover:bg-[#9BBCE5] rounded-full flex items-center justify-center">
						<icon.Icon className="w-6 h-6 text-white/40 p-1" />
					</span>
				</a>
			))}
		</motion.div>
	);
}
