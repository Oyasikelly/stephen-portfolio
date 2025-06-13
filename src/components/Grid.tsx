import { GoDotFill } from "react-icons/go";
import portfolioPreviews from "../data/portfolioPreviews";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
export default function Grid() {
	return (
		<section className="w-full grid grid-col-1 md:grid-cols-2 gap-15 justify-between items-center ">
			{portfolioPreviews.map((project) => (
				<div
					key={project.title}
					className="w-full h-auto bg-[#252e43] rounded-xl md:w-auto lg:w-[579px] p-4">
					<div className="bg-[#252e43]  rounded-lg overflow-hidden">
						<div className="relative rounded-xl group overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="w-[552px] h-[382px] object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<h2 className="text-white text-3xl mb-4 font-bold">
									{project.title}{" "}
								</h2>
								<p className="max-w-[60%] text-center">{project.description}</p>
							</div>
						</div>
						<div className="flex justify-between items-center my-10">
							<div className="flex items-center">
								<GoDotFill className="text-sm text-white/60" />
								<h3>Checkout</h3>
							</div>

							<button className="border border-white/60 px-4 py-2 flex gap-2 justify-center items-center rounded-full hover:bg-[#080d18] transition-all duration-500 group">
								View
								<FaArrowRight className="transition-transform duration-500 group-hover:rotate-[-60deg]" />
							</button>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
