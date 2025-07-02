// Articles.tsx
"use client";

import articles from "@/data/articles";
import Button from "./Button";
import { FaArrowRight, FaClock } from "react-icons/fa6";
import { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function Articles() {
	const featured = articles[0];

	return (
		<div className="w-full flex flex-col gap-12">
			{/* Featured Article */}
			<div className="w-full flex flex-col sm:p-2 md:flex-row bg-card rounded-2xl shadow-lg overflow-hidden border border-[#252e43] transition-transform duration-300 hover:-translate-y-1 group">
				<div className="relative overflow-hidden w-full h-56 xs:h-64 sm:h-72 md:w-1/2 md:h-auto">
					<img
						src={featured.img}
						alt={featured.title}
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
					/>
					<div className="absolute -inset-1 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>
				<div className="p-4 xs:p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-center">
					<div className="flex flex-wrap items-center gap-4 mb-4">
						<span className="bg-[#23283a] text-xs text-[#f7c873] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
							DEV
						</span>
						<span className="text-white/60 flex items-center gap-2 text-sm">
							<FaClock /> {featured.time} min read
						</span>
					</div>
					<h2 className="text-white text-lg xs:text-xl md:text-2xl font-semibold mb-2">
						{featured.title}
					</h2>
					<p className="text-white/80 mb-6 line-clamp-3 text-sm xs:text-base">
						{featured.content[0]}
					</p>
					<Button
						url={`/articles/${featured.slug}`}
						className="w-fit text-xs xs:text-sm md:text-base mx-auto md:mx-0">
						Learn more &rarr;
					</Button>
				</div>
			</div>

			{/* Grid of Articles */}
			<ArticleCard isThree={true} />
		</div>
	);
}
