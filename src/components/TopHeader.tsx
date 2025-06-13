// TopHeader.tsx
import react from "react";

interface topHeaderProps {
	title: string;
	page: string;
}

const TopHeader = ({ title, page }: topHeaderProps) => {
	return (
		<div className="flex flex-col justify-center items-center px-4">
			<div className="text-center flex justify-center">
				<h1 className="text-2xl  md:text-3xl font-bold  ">{title}</h1>
			</div>
			<div className="my-3 md:my-4 text-white/60">{page ? page : ""}</div>
			<div className="h-[4px] md:h-[5px] w-[60px] md:w-[70px] rounded-full bg-[#9bbce5]"></div>
		</div>
	);
};
export default TopHeader;
