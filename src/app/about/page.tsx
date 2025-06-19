"use client";

import Profile from "@/components/Profile";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import TopHeader from "@/components/TopHeader";
import customAboutLinks from "@/data/customAboutLinks";
import AnimatedSection from "@/components/AnimatedSection";
import TypingText from "@/components/TypingText";
import AnimatedCard from "@/components/AnimatedCard";

export default function About() {
	return (
		<div
			id="about"
			className="pt-12">
			<AnimatedSection>
				<TopHeader
					title="Meet Stephen Okuanade"
					page=""
				/>
			</AnimatedSection>
			<div className="mt-15 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>
			<div className="px-4 sm:px-10 md:px-20 lg:px-40 bg-[#111724]">
				<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-10">
					<div className="w-full lg:max-w-[80%] mb-6 pb-4">
						<TypingText
							text="About me"
							className="text-3xl font-bold"
							speed={0.03}
						/>
						<AnimatedCard index={0}>
							<div className="bg-[#080d18] rounded-xl border-2 border-[#252e43] px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
								<Profile />
								<Skills />
							</div>
						</AnimatedCard>
						<AnimatedCard index={1}>
							<Highlights />
						</AnimatedCard>
					</div>
					<AnimatedSection delay={0.4}>
						<div className="w-full lg:max-w-auto sticky top-4">
							<TypingText
								text="ON THIS PAGE"
								className="text-lg lg:text-xl font-semibold"
								speed={0.02}
							/>
							<ul className="mt-2 w-full">
								{customAboutLinks.map((link, index) => (
									<li
										key={index}
										className="mb-2">
										<a
											href={link.href}
											className="text-white/60 hover:underline">
											{link.title}
										</a>
										{link.children && (
											<ul className="ml-4">
												{link.children.map((child, childIndex) => (
													<li key={childIndex}>
														<a
															href={`#${child.id}`}
															className="text-white/60 hover:underline">
															{child.name}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</div>
					</AnimatedSection>
				</section>
			</div>
		</div>
	);
}
