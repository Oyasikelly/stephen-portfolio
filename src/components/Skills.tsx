import Link from "next/link";
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon } from "../data/Icons";

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
			<h3 className="text-xl md:text-2xl border-b-2 border-[#252e43] font-bold pb-4 md:pb-5">
				Skills
			</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-4">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="p-2 md:p-4 bg-[#252e43] rounded-lg">
						<img
							src={skill}
							alt={`Skill ${index + 1}`}
							className="w-10 h-10 md:w-14 md:h-14 mx-auto object-contain"
						/>
					</div>
				))}
			</div>
			<div
				id="connect"
				className="w-full mt-8 md:mt-20 flex flex-col items-center gap-4">
				<h3 className="text-lg md:text-xl font-bold">Connect with me</h3>
				<div className="flex justify-center flex-wrap gap-3 md:gap-4">
					<LinkedInIcon />
					<GitHubIcon />
					<MediumIcon />
					<EmailIcon />
				</div>
			</div>
		</div>
	);
}
