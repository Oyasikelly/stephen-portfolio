"use client";
import NextProjects from "@/components/NextProjects";
import { motion } from "framer-motion";

interface ArticleProps {
	id: string;
	title: string;
	link: string;
	content: string[];
	sections: { id: string; title: string }[];
}

export default function AnyArticle({ content, sections }: ArticleProps) {
	return (
		<>
			{sections.map((section, i) => (
				<motion.section
					key={section.id}
					id={section.id}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: i * 0.2 }}
					className="max-w-4xl mx-auto mt-10">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: i * 0.2 + 0.1 }}
						className="text-2xl md:text-3xl font-bold border-b-2 border-[#252e43] pb-2">
						{section.title}
					</motion.h2>

					{content[i]?.includes("$40 billion USD") ? (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
							className="py-4">
							<motion.ul
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
								className="text-base md:text-lg text-white/60">
								<motion.li
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: i * 0.2 + 0.4 }}
									className="flex gap-1 items-center text-[11px] md:text-base">
									<span className="font-semibold">Valuation</span> -
									<span className="text-white/60">{content[i]}</span>
								</motion.li>
							</motion.ul>
						</motion.div>
					) : (
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
							className="py-4 text-base md:text-lg text-white/60">
							{content[i]}
						</motion.p>
					)}
				</motion.section>
			))}

			{/* Optional Section for Next Projects */}
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
					className="text-md md:text-xl font-bold border-b-2 border-[#252e43] pb-2">
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
