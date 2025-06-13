import React from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import portfolioPreviews from "@/data/portfolioPreviews";
export default function List() {
	return (
		<section className=" flex flex-wrap lg:flex-col items-center">
			{portfolioPreviews.map((project) => (
				<FeaturedProjects
					key={project.title}
					title={project.title}
					image={project.image}
					link={project.link}>
					{project.description}
				</FeaturedProjects>
			))}
		</section>
	);
}
