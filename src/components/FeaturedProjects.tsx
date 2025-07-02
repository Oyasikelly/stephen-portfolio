import FeaturedProjectCards from "./FeaturedProjectCard";
import featuredProjects from "@/data/FeaturedProjects";

export default function FeaturedProjects() {
	return (
		<div>
			{featuredProjects.map((project, i) => (
				<>
					{i <= 4 ? (
						<FeaturedProjectCards
							key={i}
							index={i}
							{...project}
						/>
					) : null}
				</>
			))}
		</div>
	);
}
