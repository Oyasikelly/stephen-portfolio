import Link from "next/link";
import { FaArrowRight, FaClock } from "react-icons/fa6";
import { motion } from "framer-motion";

interface FeaturedProjectsProps {
	children: React.ReactNode;
	title?: string;
	image?: string;
	link?: string;
	time?: number;
	index: number;
}

export function FeaturedProjects({
	title,
	children,
	image,
	index,
}: FeaturedProjectsProps) {
	const time = 1;
	return (
		<motion.div className="bg-[#080d18] shadow-2xl shadow-black/40 hover:shadow-3xl transition-shadow duration-300">
			<h3 className="py-3 md:py-4 px-4 md:px-6 lg:px-20 bg-[#252e43] text-lg md:text-xl">
				{title}
			</h3>
			<div className="w-auto px-4 md:px-6 lg:px-20 py-6 md:py-10 mx-auto flex flex-col gap-4 lg:gap-6 md:flex-row items-center">
				{/* TEXT SECTION */}
				<div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6 order-1 md:order-2">
					<span className="text-gray-400 flex items-center gap-2  mt-2 mb-3">
						<FaClock />
						{time} min read
					</span>
					<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
						{title}
					</h3>
					<div className="w-10 md:w-[40px] rounded-xl mb-4 md:mb-6 pt-1 md:pt-2 bg-gradient-to-r from-white via-[#bddafe] to-[#9bbce5]"></div>
					<p className="mb-4 text-sm md:text-base">{children}</p>
					<Link
						href={`/portfolio/${title
							?.trim()
							.toLowerCase()
							.replace(/\.com$/, "")}`}
						className="hover:underline w-fit flex items-center gap-2 text-sm md:text-base">
						VIEW PROJECT{" "}
						<FaArrowRight className={`arrow-animate arrow-animate-${index}`} />
					</Link>
				</div>

				{/* IMAGE SECTION */}
				<div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
					<img
						src={`${image}`}
						alt={`${title}`}
						className="max-w-full h-auto max-h-64 md:max-h-80 object-contain"
					/>
				</div>
			</div>
		</motion.div>
	);
}
