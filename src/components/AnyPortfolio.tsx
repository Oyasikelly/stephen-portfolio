"use client";
import NextProjects from "@/components/NextProjects";
import portfolioPreviews from "@/data/portfolioPreviews";
import { motion } from "framer-motion";

interface Section {
	id: string;
	title: string;
}

interface PorfolioProps {
	link: string;
	id: string;
	content: string[];
	sections: Section[];
}

export default function AnyPortfolio({ content, sections }: PorfolioProps) {
	return (
		<>
			{sections.map((section, index) => (
				<motion.section
					key={section.id}
					id={section.id}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: index * 0.2 }}
					className={`mt-8 md:mt-10 max-w-4xl mx-auto ${
						index === 0 ? "mt-0" : ""
					}`}>
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
						className="text-xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
						{section.title}
					</motion.h2>
					{content[index] && (
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
							className="py-4 text-[12px] md:text-base text-white/60">
							{content[index]}
						</motion.p>
					)}
				</motion.section>
			))}

			<motion.section
				id="hobbies"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: sections.length * 0.2 }}
				className="mt-8 md:mt-10 max-w-4xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: sections.length * 0.2 + 0.1 }}
					className="text-[14px] md:text-xl font-bold border-b-2 border-[#252e43] pb-2">
					NEXT PROJECTS
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: sections.length * 0.2 + 0.2 }}>
					<NextProjects />
				</motion.div>
			</motion.section>
		</>
	);
}
