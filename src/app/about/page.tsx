"use client";

import Profile from "@/components/Profile";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import TopHeader from "@/components/TopHeader";
import customAboutLinks from "@/data/customAboutLinks";
import AnimatedSection from "@/components/AnimatedSection";
import SoftPageFade from "@/components/SoftPageFade";
import HorizontalLine from "@/components/HorizontalLine";
import { Text } from "@/components/Text";

export default function About() {
	return (
		<SoftPageFade>
			<div
				id="about"
				className="pt-12">
				<TopHeader
					title="Meet Stephen Okuanade"
					page=""
				/>

				<HorizontalLine />

				<div className="px-4 sm:px-10 md:px-20 lg:px-40 bg-tertiary">
					<section className="pt-15 my-0 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-10">
						<div className="w-full lg:max-w-[80%] mb-6 pb-4">
							<Text
								as="h2"
								className="text-light">
								About me
							</Text>

							<div className="bg-[#080d18] rounded-xl border-2 border-[#252e43] px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
								<Profile />
								<Skills />
							</div>

							<Highlights />
						</div>
						<AnimatedSection delay={0.4}>
							<div className="w-full lg:max-w-auto sticky top-4">
								<span>ON THIS PAGE</span>
								<ul className="mt-2 w-full">
									{customAboutLinks.map((link, index) => (
										<li
											key={index}
											className="mb-2">
											<a
												href={link.href}
												className="text-dimlight hover:underline">
												{link.title}
											</a>
											{link.children && (
												<ul className="ml-4">
													{link.children.map((child, childIndex) => (
														<li key={childIndex}>
															<a
																href={`#${child.id}`}
																className="text-dimlight hover:underline">
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
		</SoftPageFade>
	);
}
