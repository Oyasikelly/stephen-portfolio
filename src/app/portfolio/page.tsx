"use client";
import Grid from "@/components/Grid";
import List from "@/components/List";
import TopHeader from "@/components/TopHeader";
import { FaList } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import React, { useState } from "react";
import Button from "@/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedSection from "@/components/AnimatedSection";
import TypingText from "@/components/TypingText";
import { motion } from "framer-motion";

export default function Portfolio() {
	const [arrangement, setArrangement] = useState<"grid" | "list">("list");

	function handleArrangementChange(newArrangement: "grid" | "list") {
		setArrangement(newArrangement);
	}

	return (
		<div className="pt-12">
			<AnimatedSection>
				<TopHeader
					title="Portfolio"
					page=""
				/>
			</AnimatedSection>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="flex gap-2 lg:gap-3 justify-center text-sm md:text-base text-sm md:text-base sm:justify-end items-center mt-4 lg:mt-0 px-4 sm:px-6 md:px-10 lg:px-40">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => handleArrangementChange("list")}
					className={`${
						arrangement === "list" ? "bg-[#111724] border-animate" : ""
					} text-white px-2 py-1.5 md:px-3 md:py-2  hover:text-white/30 cursor-pointer hover:bg-[#252e43] rounded-xl transition-all duration-300 ease-in-out flex items-center gap-1 lg:gap-2`}>
					<FaList />
					<TypingText
						text="List"
						speed={0.02}
					/>
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => handleArrangementChange("grid")}
					className={`${
						arrangement === "grid" ? "bg-[#111724] border-animate" : ""
					}   text-white px-3 py-1.5 md:px-4 md:py-2  hover:text-white/30 cursor-pointer hover:bg-[#252e43] rounded-xl transition-all duration-300 ease-in-out flex items-center gap-1 lg:gap-2`}>
					<BsGrid3X3Gap />
					<TypingText
						text="Grid"
						speed={0.02}
					/>
				</motion.button>
			</motion.div>
			<div className="mt-6 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>
			<div className="px-4 sm:px-6 md:px-10 lg:px-40 bg-[#111724] flex flex-col justify-center items-center">
				<AnimatedSection>
					<section className="pt-8 sm:pt-15 my-0 w-full">
						{arrangement === "list" ? <List /> : <Grid />}
					</section>
				</AnimatedSection>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="w-fit mt-20 pb-20">
					<Button url={"/portfolio"}>
						<TypingText
							text="show more"
							speed={0.02}
						/>{" "}
						<FaArrowRight className="arrow-animate arrow-animate-2 arrow" />
					</Button>
				</motion.div>
			</div>
		</div>
	);
}
