"use client";
import Grid from "@/components/Grid";
import List from "@/components/List";
import TopHeader from "@/components/TopHeader";
import { FaList } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import React, { useState } from "react";
import Button from "@/components/Button";
import { FaArrowRight } from "react-icons/fa6";

export default function Portfolio() {
	const [arrangement, setArrangement] = useState<"grid" | "list">("list");

	function handleArrangementChange(newArrangement: "grid" | "list") {
		setArrangement(newArrangement);
	}

	return (
		<div className="pt-12">
			<TopHeader
				title="Portfolio"
				page=""
			/>
			<div className="flex gap-3 justify-center sm:justify-end items-center px-4 sm:px-6 md:px-10 lg:px-40">
				<button
					onClick={() => handleArrangementChange("list")}
					className={`${
						arrangement === "list" ? "bg-[#252e43]" : ""
					} text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base hover:text-white/30 cursor-pointer hover:bg-[#252e43] rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2`}>
					<FaList />
					List
				</button>
				<button
					onClick={() => handleArrangementChange("grid")}
					className={`${
						arrangement === "grid" ? "bg-[#252e43]" : ""
					} text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base hover:text-white/30 cursor-pointer hover:bg-[#252e43] rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2`}>
					<BsGrid3X3Gap />
					Grid
				</button>
			</div>
			<div className="mt-6 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>
			<div className="px-4 sm:px-6 md:px-10 lg:px-40 bg-[#111724] flex flex-col justify-center items-center">
				<section className="pt-8 sm:pt-15 my-0 w-full">
					{arrangement === "list" ? <List /> : <Grid />}
				</section>
				<div className="w-fit mt-20 pb-20">
					<Button url={"/portfolio"}>
						show more <FaArrowRight className="arrow" />
					</Button>
				</div>
			</div>
		</div>
	);
}
