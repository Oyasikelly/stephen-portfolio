"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FaClock } from "react-icons/fa";
import articles from "../data/articles";

interface ArticleCardProps {
	onScroll?: () => void;
}

const ArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(
	({ onScroll }, ref) => {
		const internalRef = useRef<HTMLDivElement>(null);

		// Expose the internal ref to parent
		useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

		return (
			<div
				ref={internalRef}
				className="px-4 sm:px-6 md:px-20 lg:px-40  w-full flex gap-4 overflow-x-auto hide-scrollbar px-2"
				onScroll={onScroll}>
				{articles.map((article, index) => (
					<div
						key={index}
						className="flex-shrink-0 p-4 pb-6 md:pb-10 w-[280px] sm:w-[320px] md:w-[400px] rounded-xl bg-[#252e43] transition-all duration-300 ease-in-out">
						<div className="h-[180px] sm:h-[220px] md:h-[300px] rounded-xl">
							<img
								className="w-full h-full object-cover rounded-xl"
								src={article.img}
								alt={article.title}
							/>
						</div>
						<button className="my-3 md:my-4 mb-3 md:mb-4 rounded-xl p-2 md:p-3 text-sm md:text-base border border-white">
							{article.title}
						</button>
						<span className="text-white/50 flex items-center gap-2 text-xs md:text-sm">
							<FaClock className="text-xs md:text-sm" /> {article.time} min
							{article.time > 1 ? "s" : ""} read
						</span>
						<p className="mt-2 text-sm md:text-base">{article.description}</p>
					</div>
				))}
			</div>
		);
	}
);

export default ArticleCard;
