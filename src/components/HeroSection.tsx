import Button from "@/components/Button";
import { LinkedInIcon, GitHubIcon, MediumIcon, EmailIcon } from "@/data/Icons";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="py-10 md:py-20">
			<div className="w-auto mx-auto flex flex-col md:flex-row items-center">
				<div className="w-full md:max-w-[50%] md:w-1/2 mb-10 md:mb-0 px-4 md:px-0">
					<span>Hey there 👋 I'm Stephen Okuanade</span>
					<h1 className="text-5xl lg:text-8xl mt-6 md:mt-4  font-bold mb-4 md:mb-6">
						FullStack Developer
					</h1>
					<p className="text-base md:text-lg max-w-full md:max-w-[80%] mb-6 md:mb-8">
						A Frontend heavy Fullstack Software Engineer that transforms
						problems into scalable solutions with design & technology for
						intuitive human-centered experiences, read more {""}
						<Link
							className="underline"
							href="/about">
							about me
						</Link>
					</p>
					<div className="flex flex-wrap gap-2 md:gap-4">
						<Button variant="outline">Book call</Button>
						<Button>Message me</Button>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col items-center md:items-end px-4 md:px-0">
					<div className="hidden md:block">
						<div
							style={{ borderBottomLeftRadius: "50%" }}
							className="border-2 rounded-xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
							<div className="p-4 sm:p-6 h-full">
								<img
									style={{ borderBottomLeftRadius: "50%" }}
									className="w-full h-full object-cover rounded-xl"
									src="/assets/stephen.png"
									alt="Stephen Okuanade"
								/>
							</div>
						</div>
					</div>

					<div className="hidden md:flex flex justify-center md:justify-end gap-3 items-center w-48 sm:w-64 md:w-80 mt-4">
						<EmailIcon className="w-6 h-6" />
						<LinkedInIcon className="w-6 h-6" />
						<MediumIcon className="w-6 h-6" />
						<GitHubIcon className="w-6 h-6" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
