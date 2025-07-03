"use client";
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";
import ProjectImage from "./ProjectImage";

interface PreNexData {
	slug: string;
	title: string;
	description: string;
	image?: string;
	link?: string;
}

interface PrevNexCardProps {
	prev?: PreNexData;
	next?: PreNexData;
}

export default function PrevNexCard({ prev, next }: PrevNexCardProps) {
	const truncate = (str: string, n: number) =>
		str.length > n ? str.slice(0, n) + "..." : str;
	return (
		<div className="mb-10 w-[80%] flex flex-col lg:flex-row justify-center items-center gap-0 mt-16 bg-transparent px-4 sm:px-8">
			{/* Previous Project */}
			{prev && (
				<div className="flex-1 flex flex-col lg:flex-row w-full max-w-3xl">
					<Link
						href={prev.link || "#"}
						className="relative flex-1 bg-card rounded-xl flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-6 shadow-lg border border-[#252e43] group hover:scale-[1.01] transition-transform duration-200">
						<div className="flex flex-col justify-center w-full sm:w-auto text-center sm:text-left">
							<div className="text-sm sm:text-base text-dimlight mb-2 font-bold tracking-widest uppercase">
								Previous
							</div>
							<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
								<RxDoubleArrowRight className="absolute top-1/2 left-2 text-primary text-2xl sm:text-3xl rotate-180 group-hover:-translate-x-1 transition-transform duration-200 drop-shadow-lg hidden sm:block" />
								<div>
									<div className="text-lg sm:text-xl md:text-2xl font-bold text-light leading-tight mb-2">
										{truncate(prev.title, 40)}
									</div>
									<div className="text-sm sm:text-base text-dimlight line-clamp-2">
										{prev.description}
									</div>
								</div>
							</div>
						</div>
						<ProjectImage
							src={prev.image}
							alt={prev.title}
							small={true}
						/>
					</Link>
				</div>
			)}

			{/* Divider (vertical for lg, horizontal for mobile) */}
			{prev && next && (
				<div className="w-full h-px lg:w-px lg:h-auto bg-[#252e43] rounded-full my-4 lg:my-0 lg:mx-0" />
			)}

			{/* Next Project */}
			{next && (
				<div className="flex-1 flex flex-col lg:flex-row-reverse w-full max-w-3xl">
					<Link
						href={next.link || "#"}
						className="relative flex-1 bg-card rounded-xl flex flex-col sm:flex-row-reverse items-center p-4 sm:p-6 gap-6 shadow-lg border border-[#252e43] group hover:scale-[1.01] transition-transform duration-200">
						<div className="flex flex-col justify-center w-full sm:w-auto text-center sm:text-right">
							<div className="text-sm sm:text-base text-dimlight mb-2 font-bold tracking-widest uppercase">
								Next
							</div>
							<div className="flex flex-col sm:flex-row-reverse items-center sm:items-end gap-4">
								<RxDoubleArrowRight className="absolute top-1/2 right-2 text-primary text-2xl sm:text-3xl group-hover:translate-x-1 transition-transform duration-200 drop-shadow-lg hidden sm:block" />
								<div>
									<div className="text-lg sm:text-xl md:text-2xl font-bold text-light leading-tight mb-2">
										{truncate(next.title, 40)}
									</div>
									<div className="text-sm sm:text-base text-dimlight line-clamp-2">
										{next.description}
									</div>
								</div>
							</div>
						</div>
						<ProjectImage
							src={next.image}
							alt={next.title}
							small={true}
						/>
					</Link>
				</div>
			)}
		</div>
	);
}
