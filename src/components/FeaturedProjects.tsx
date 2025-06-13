import Link from "next/link";
import { FaArrowRight, FaClock } from "react-icons/fa6";

interface FeaturedProjectsProps {
	children: React.ReactNode;
	title?: string;
	image?: string;
	link?: string;
	time?: number;
}

export function FeaturedProjects({
	title,
	children,
	image,
}: FeaturedProjectsProps) {
	const time = 1;
	return (
		<div className="mt-8 md:mt-15 border-1 border-[#252e43] rounded-lg shadow-lg shadow-black/20 overflow-hidden">
			<h3 className="py-3 md:py-4 px-4 md:px-6 lg:px-20 bg-[#252e43] text-lg md:text-xl">
				{title}
			</h3>
			<div className="w-auto px-4 md:px-6 lg:px-20 py-6 md:py-10 mx-auto flex flex-col-reverse md:flex-row items-center">
				<div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
					<span className="text-gray-400 flex items-center gap-2 mb-3">
						<FaClock />
						{time} min read
					</span>
					<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
						{title}
					</h3>
					<div className="w-10 md:w-[40px] rounded-xl mb-4 md:mb-6 pt-1 md:pt-2 bg-gradient-to-r from-[white] via-[#bddafe] to-[#9bbce5]"></div>
					<p className="mb-4 text-sm md:text-base">{children}</p>
					<Link
						href={`/portfolio/${title?.trim().toLocaleLowerCase()}`}
						className="hover:underline w-fit flex items-center gap-2 text-sm md:text-base">
						VIEW PROJECT <FaArrowRight />
					</Link>
				</div>
				<div className="w-full md:w-1/2 flex justify-center">
					<img
						src={`${image}`}
						alt={`${title}`}
						className="max-w-full h-auto max-h-64 md:max-h-80 object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
