import featuredProjects from "@/data/FeaturedProjects";
import ProjectsCard from "./ProjectsCard";

interface ProjectsProps {
	data?: any[];
}

export default function Projects({ data }: ProjectsProps) {
	const projects = data || featuredProjects;
	return (
		<div className="">
			{projects.map((project, i) => (
				<ProjectsCard
					key={i}
					index={i}
					{...project}
				/>
			))}
		</div>
	);
}
