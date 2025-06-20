import Link from "next/link";
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon } from "../data/Icons";
import { motion } from "framer-motion";

const skills = [
	"/assets/Favourite_tools/reactjs.png",
	"/assets/Favourite_tools/nodejs.png",
	"/assets/Favourite_tools/aws.png",
	"/assets/Favourite_tools/vue.png",
	"/assets/Favourite_tools/Nextjs.png",
	"/assets/Favourite_tools/TypeScript.png",
	"/assets/Favourite_tools/nuxtjs.png",
	"/assets/Favourite_tools/figma.png",
];

export default function Skills() {
	return (
		<div
			id="favourite_tools"
			className="flex flex-col py-6 md:py-10">
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-xl md:text-2xl border-b-2 border-[#252e43] border-t-2  lg:border-t-0 border-[#252e43] font-bold py-4 md:py-5">
				Skills
			</motion.h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-4">
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className={`skill-border-animate skill-border-animate-${
							1 + index
						} p-2 md:p-4 bg-[#252e43] rounded-lg`}>
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
					<LinkedInIcon />
					<GitHubIcon />
					<MediumIcon />
					<EmailIcon />
				</div>
			</motion.div>
		</div>
	);
}
