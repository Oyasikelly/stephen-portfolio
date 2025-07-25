import { motion } from "framer-motion";
import Icons from "@/data/Icons";
import Link from "next/link";
import React from "react";
import { Text } from "@/components/Text";
const skills = [
	"/assets/Favourite_tools/reactjs.png",
	"/assets/Favourite_tools/nodejs.png",
	"/assets/Favourite_tools/aws.png",
	"/assets/Favourite_tools/vue.png",
	"/assets/Favourite_tools/nextjs.png",
	"/assets/Favourite_tools/typescript.png",
	"/assets/Favourite_tools/nuxtjs.png",
	"/assets/Favourite_tools/figma.png",
];

export default function Skills() {
	return (
		<div
			id="favourite_tools"
			className="flex flex-col py-6 md:py-10">
			<Text
				as="h3"
				className="text-light border-b-1 border-[#252e43]">
				Skills
			</Text>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-4">
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						className="p-2 md:p-4 bg-[#252e43] rounded-lg">
						<img
							src={skill}
							alt={`Skill ${index + 1}`}
							className="w-10 h-10 md:w-14 md:h-14 mx-auto object-contain"
						/>
					</motion.div>
				))}
			</div>
			<motion.div
				id="connect"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="w-full mt-8 md:mt-20 flex flex-col items-center gap-4">
				<h3 className="text-lg md:text-xl font-bold">Connect with me</h3>
				<div className="flex justify-center flex-wrap gap-3 md:gap-4">
					{Array.isArray(Icons) &&
						Icons.map((icon, index) => (
							<Link
								href={icon.href}
								key={index}>
								<span className="icon-wrapper group-hover:icon-pulled">
									{React.createElement(icon.Icon, {
										className:
											"w-6 h-6 text-[#9BBCE5] p-1 border border-[#9BBCE5] rounded-full",
									})}
								</span>
							</Link>
						))}
				</div>
			</motion.div>
		</div>
	);
}
