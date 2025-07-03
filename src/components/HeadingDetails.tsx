import { FaClock } from "react-icons/fa6";

interface HeadingDetailProps {
	time: string;
	date: string;
	categories: [];
}
export default function HeadingDetails({
	time,
	date,
	categories,
}: HeadingDetailProps) {
	return (
		<div className="flex justify-between items-center ">
			<div className="flex text-dimlight items-center gap-4 italic ">
				<FaClock /> {""}
				<span>
					{time} mins | {date}
				</span>
			</div>
			<div className="flex justify-between items-center">
				{categories.map((item, index) => (
					<p
						key={index + 1}
						className="p-2 bg-card text-sm text-dimlight uppercase font-semibold rounded-sm shadow-xl">
						{item}
					</p>
				))}
			</div>
		</div>
	);
}
