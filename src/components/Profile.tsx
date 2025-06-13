import { FaStar } from "react-icons/fa";
import { FaLocationPin, FaNoteSticky } from "react-icons/fa6";

export default function Profile() {
	return (
		<div className="border-r-0 lg:border-r-2 border-[#252e43] lg:pr-6 py-6 md:py-10">
			<h3 className="text-xl md:text-2xl border-b-2 border-[#252e43] font-bold pb-4 md:pb-5">
				Profile
			</h3>
			<div className="mt-4 md:mt-0">
				<div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4 mb-6 text-sm md:text-md">
					<div className="w-full md:w-[80%]">
						<img
							src="/assets/stephen.png"
							alt="stephen"
							className="w-full max-w-[300px] mx-auto md:mx-0 md:max-w-none h-auto object-cover rounded-lg"
						/>
					</div>
					<div
						id="favourite_tools"
						className="w-full md:w-[100%] flex flex-row md:flex-col gap-2 md:gap-6 flex-wrap justify-center">
						<p className="flex justify-center items-center gap-2 w-fit py-4 px-2 bg-[#252e43] text-[#9bbce5] rounded-lg">
							<FaStar /> Senior Software Engineer
						</p>
						<p className="flex justify-center items-center gap-2 w-fit py-4 px-2 bg-[#252e43] text-[#9bbce5] rounded-lg">
							<FaLocationPin /> London, UK
						</p>
						<p className="flex justify-center items-center gap-2 w-fit py-4 px-2 bg-[#252e43] text-[#9bbce5] rounded-lg">
							<FaNoteSticky /> Monite, Ex. checkout.com
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="w-[50%] bg-[#252e43] p-4 rounded-lg text-center mt-4">
						<h3 className="text-4xl font-bold">8+</h3>
						<p>Years of experience</p>
					</div>
					<div className="w-[50%] bg-[#252e43] p-4 rounded-lg text-center mt-4">
						<h3 className="text-4xl font-bold">5+</h3>
						<p>Countries mentored</p>
					</div>
				</div>
			</div>
		</div>
	);
}
