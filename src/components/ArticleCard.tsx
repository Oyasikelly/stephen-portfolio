"use client";
import React, { forwardRef, ReactElement } from "react";
import { FaClock } from "react-icons/fa";
import articles from "../data/articles";
import { FaArrowRight } from "react-icons/fa6";

interface ArticleCardProps {
	setIsThree?: () => void;
	isThree?: boolean;
	articleProp?: any; // Replace 'any' with the actual type if known
}
interface cardContainerProps {
	article: any;
	index: any;
}

function CardContainer({ article, index }: cardContainerProps) {
	console.log(index);
	return (
		<div className="bg-card border border-[#252e43] rounded-xl p-5 flex shrink-0 flex-col justify-between min-h-[420px] max-w-[370px] mx-auto shadow-md transition-transform duration-300 hover:-translate-y-1 group">
			{/* Meta Row */}

			<div className="flex items-center justify-between mb-4">
				<span className="text-dimlight flex items-center gap-2 text-sm font-normal">
					<FaClock className="text-xs" /> {article.time} min read
				</span>
				<span className="bg-secondary text-xs text-white font-bold px-2.5 py-1 rounded uppercase tracking-wide">
					{article.status.toUpperCase()}
				</span>
			</div>
			{/* Image */}
			<div className="relative overflow-hidden flex justify-center items-center mb-4">
				<img
					src={article.img}
					alt={article.title}
					className="rounded-lg w-full h-40 object-cover bg-[#222] transition-transform duration-300 group-hover:scale-102"
					style={{ maxWidth: 320 }}
				/>
				<div className="absolute -inset-2 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			{/* Title */}
			<h3 className="text-white text-lg font-semibold mb-6 leading-snug line-clamp-2">
				{article.title}
			</h3>
			{/* Learn more */}
			<div className="mt-auto w-fit">
				<a
					href={`/articles/${article.slug}`}
					className="font-bold text-white flex items-center gap-2 hover:underline group">
					Learn more
					<FaArrowRight className="text-primary group-hover:translate-x-1 transition-transform duration-200" />
				</a>
			</div>
		</div>
	);
}

const ArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(
	({ isThree }, ref) => {
		return (
			<div
				className={`${
					isThree === true
						? "grid grid-cols-1 md:grid-cols-3 gap-8"
						: "flex flex gap-4 "
				} w-full `}
				ref={ref}>
				{isThree === true
					? articles.slice(0, 3).map((article, i) => (
							<CardContainer
								article={article}
								index={1 + (i ?? 0)}
								key={article.slug}
							/>
					  ))
					: articles.map((article, index) => (
							<CardContainer
								article={article}
								index={index}
								key={article.slug}
							/>
					  ))}
			</div>
		);
	}
);

export default ArticleCard;

// {
// 	articles.map((article, index) => (
// 		<div
// 			key={index}
// 			className="bg-card border border-[#252e43] rounded-xl p-5 flex shrink-0 flex-col justify-between min-h-[420px] max-w-[370px] mx-auto shadow-md group">
// 			{/* Meta Row */}
// 			<div className="flex items-center justify-between mb-4">
// 				<span className="text-dimlight flex items-center gap-2 text-sm font-normal">
// 					<FaClock className="text-xs" /> {article.time} min read
// 				</span>
// 				<span className="bg-secondary text-xs text-white font-bold px-2.5 py-1 rounded uppercase tracking-wide">
// 					{article.status.toUpperCase()}
// 				</span>
// 			</div>
// 			{/* Image */}
// 			<div className="relative flex justify-center items-center mb-4">
// 				<img
// 					src={article.img}
// 					alt={article.title}
// 					className="rounded-lg w-full h-40 object-cover bg-[#222] transition-transform duration-300 group-hover:scale-105"
// 					style={{ maxWidth: 320 }}
// 				/>
// 				<div className="absolute -inset-2 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// 			</div>
// 			{/* Title */}
// 			<h3 className="text-white text-lg font-semibold mb-6 leading-snug line-clamp-2">
// 				{article.title}
// 			</h3>
// 			{/* Learn more */}
// 			<div className="mt-auto w-fit">
// 				<a
// 					href={`/articles/${article.slug}`}
// 					className="font-bold text-white flex items-center gap-2 hover:underline group">
// 					Learn more
// 					<FaArrowRight className="text-primary group-hover:translate-x-1 transition-transform duration-200" />
// 				</a>
// 			</div>
// 		</div>
// 	));
// }
{
	/* <div
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
					</div> */
}
