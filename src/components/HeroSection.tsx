"use client";

import { motion } from "framer-motion";

// Components
import Button from "@/components/Button";
import SocialIconLinks from "@/components/SocialIconLinks";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
	return (
		<motion.section className="px-4 sm:px-6 md:px-20 lg:px-40">
			<div className="py-10 md:py-20">
				<div className="w-auto mx-auto flex flex-col md:flex-row items-center">
					<div className="w-full md:max-w-[50%] md:w-1/2 mb-10 md:mb-0 px-4 md:px-0">
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, delay: 0.1 }}
							className="text-[#ffffffb4] text-lg sm:text-xl">
							Hey there 👋 I'm Stephen Okuanade
						</motion.span>
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, delay: 0.2 }}
							className="text-5xl lg:text-8xl mt-6 md:mt-4 font-bold mb-4 md:mb-6">
							FullStack Developer
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, delay: 0.1 }}
							className="text-[#ffffffb4] text-base sm:text-lg mt-4">
							A Frontend heavy Fullstack Software Engineer that transforms
							problems into scalable solutions with design & technology for
							intuitive human-centered experiences, read more about me
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.8 }}
							className="flex flex-row justify-center md:justify-start gap-4 mt-6">
							<Button
								variant="default"
								showArrow
								url="/contact"
								className="text-xs md:text-auto">
								Book call
							</Button>

							<Button
								variant="outline"
								showArrow
								url="/restricted">
								Message me
							</Button>
						</motion.div>
					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-end px-4 md:px-0">
						<div className="hidden md:block">
							<motion.div
								initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
								whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
								style={{ borderBottomLeftRadius: "50%" }}
								className="border-2 rounded-xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
								<div className="p-4 sm:p-6 h-full">
									<motion.img
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
										style={{ borderBottomLeftRadius: "50%" }}
										className="w-full h-full object-cover rounded-xl"
										src="/assets/stephen.png"
										alt="Stephen Okuanade"
									/>
								</div>
							</motion.div>
						</div>

						<SocialIconLinks />
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
