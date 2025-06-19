import React from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import portfolioPreviews from "@/data/portfolioPreviews";
export default function List() {
	return (
		<section className="flex flex-wrap lg:flex-col items-center">
			{portfolioPreviews.map((project, index) => (
				<FeaturedProjects
					key={project.title}
					title={project.title}
					image={project.image}
					link={project.link}
					index={index}>
					{project.description}
				</FeaturedProjects>
			))}
		</section>
	);
}
