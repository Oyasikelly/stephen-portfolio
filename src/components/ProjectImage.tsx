"use client";

import { useState } from "react";

const defaultImage = "/assets/portfolio/default-portfolio-image.png";

interface ProjectImageProps {
	src: string | undefined;
	alt: string;
	small: boolean;
}

const ProjectImage = ({ src, alt, small }: ProjectImageProps) => {
	const [imgSrc, setImgSrc] = useState(src?.trim() || defaultImage);

	return (
		<img
			src={imgSrc}
			alt={alt}
			onError={() => setImgSrc(defaultImage)}
			className={`${
				small === true
					? "w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 "
					: "w-full max-w-[80%] md:max-w-[50%] h-auto md:h-[500px] aspect-[5/4]"
			} object-cover object-center rounded-lg shadow-md border border-[#252e43] mt-6 sm:mt-0`}
		/>
	);
};

export default ProjectImage;
