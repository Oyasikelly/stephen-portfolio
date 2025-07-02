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
			<div className="w-full flex flex-col p-2 md:flex-row bg-card rounded-2xl shadow-lg overflow-hidden border border-[#252e43] transition-transform duration-300 hover:-translate-y-1 group">
				<div className="relative overflow-hidden w-full md:w-1/2 h-64 md:h-auto">
					<img
						src={featured.img}
						alt={featured.title}
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
					/>
					<div className="absolute -inset-1 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>
				<div className="p-6 md:p-10 w-1/2">
					<div className="flex items-center gap-4 mb-4">
						<span className="bg-[#23283a] text-xs text-[#f7c873] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
							DEV
						</span>
						<span className="text-white/60 flex items-center gap-2 text-sm">
							<FaClock /> {featured.time} min read
						</span>
					</div>
					<h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
						{featured.title}
					</h2>
					<p className="text-white/80 mb-6 line-clamp-3">
						{featured.content[0]}
					</p>
					<Button
						url={`/articles/${featured.slug}`}
						className="w-fit">
						Learn more &rarr;
					</Button>
				</div>
			</div>

			{/* Grid of Articles */}
			<ArticleCard isThree={true} />
		</div>
	);
}
