"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FaClock } from "react-icons/fa";
import articles from "../data/articles";
import Button from "./Button";
import { Text } from "./Text";
import { colors } from "@/libs/styles/colors";

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
				className="w-full flex gap-4 overflow-x-auto hide-scrollbar"
				onScroll={onScroll}>
				{articles.map((article, index) => (
					<div
						key={index}
						className="flex-shrink-0 p-4 pb-6 md:pb-10 w-[280px] sm:w-[320px] md:w-[400px] rounded-xl bg-card duration-700 ease-out shadow-xl">
						<div className="h-[180px] sm:h-[220px] md:h-[300px] rounded-xl">
							<img
								className="w-full h-full object-cover rounded-xl"
								src={article.img}
								alt={article.slug}
							/>
						</div>
						<Button
							variant="ghost"
							className="my-4"
							url={`/articles/${article.slug}`}>
							View
						</Button>
						<span className="text-dimlight my-4 flex items-center gap-2 text-xs md:text-sm">
							<FaClock className="text-xs md:text-sm" /> {article.time} min
							{article.time > 1 ? "s" : ""} read
						</span>
						<Text
							as="p"
							style={{ color: colors.light }}
							className="mt">
							{article.title}
						</Text>
					</div>
				))}
			</div>
		);
	}
);

export default ArticleCard;
