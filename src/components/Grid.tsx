import { GoDotFill } from "react-icons/go";
import portfolioPreviews from "../data/FeaturedProjects";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedGridItem from "./AnimatedGridItem";
import Button from "./Button";

export default function Grid({ visibleCount = 4 }) {
	return (
		<section className="w-full grid grid-col-1 md:grid-cols-2 gap-15 pb-10 justify-items-center ">
			{portfolioPreviews.slice(0, visibleCount).map((project, index) => (
				<AnimatedGridItem
					index={index}
					key={index + 1}>
					<div className="w-full h-auto rounded-xl group md:w-auto lg:w-[579px] ">
						<div className="bg-card p-4   rounded-lg overflow-hidden">
							<div className="relative rounded-xl  overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-[552px] h-[382px] object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<h2 className="text-white text-3xl mb-4 font-bold">
										{project.title}{" "}
									</h2>
									<p className="max-w-[60%] text-center">
										{project.description}
									</p>
								</div>
							</div>
							<div className="flex justify-between items-center my-10">
								<div className="flex items-center">
									<GoDotFill className="text-sm text-white/60" />
									{project.title}
								</div>

								<Button
									variant="ghost"
									url={`/portfolio/${project.title
										?.trim()
										.toLowerCase()
										.replace(/\.com$/, "")}`}>
									view
								</Button>
							</div>
						</div>
					</div>
				</AnimatedGridItem>
			))}
		</section>
	);
}
