import { FaStar } from "react-icons/fa";
import { FaLocationPin, FaNoteSticky } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Profile() {
	return (
		<div className="border-r-0 lg:border-r-2 border-[#252e43] lg:pr-6 py-6 md:py-10">
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-xl md:text-2xl border-b-2 border-[#252e43] font-bold pb-4 md:pb-5">
				Profile
			</motion.h3>
			<div className="mt-4 md:mt-0">
				<div className="w-full grid grid-cols-2 justify-between items-center gap-4 mt-4 mb-4 lg:mb-6 text-sm md:text-md">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="w-full h-full">
						<img
							src="/assets/stephen.png"
							alt="stephen"
							className="w-full h-full max-w-auto mx-auto md:mx-0 md:max-w-none h-auto object-cover rounded-lg"
						/>
					</motion.div>
					<div
						id="favourite_tools"
						className="w-full h-full md:w-[100%] flex flex-col gap-1 md:gap-2 flex-wrap text-[10px] md:text-sm md:text-base  items-start justify-start">
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.3 }}
							className="flex justify-center items-center gap-2 w-fit py-1 px-2 md:py-2 md:px-2 bg-[#252e43] text-[#9bbce5] rounded-lg">
							<FaStar /> Senior Software Engineer
						</motion.p>
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.4 }}
							className="flex justify-center items-center gap-2 w-fit py-1 px-2 md:py-2 md:px-2 bg-[#252e43] text-[#9bbce5] rounded-lg">
							<FaLocationPin /> London, UK
						</motion.p>
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.5 }}
							className="flex justify-center items-center gap-2 w-fit py-1 px-2 md:py-2 md:px-2 bg-[#252e43] text-[#9bbce5] rounded-lg">
							<FaNoteSticky /> Monite, Ex. checkout.com
						</motion.p>
					</div>
				</div>

				<div className="flex flex-row text-[10px] lg:text-base items-center justify-between gap-4 mt-1 lg:mt-3">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="w-[50%] bg-[#252e43] p-2 lg:p-4 rounded-lg text-center ">
						<h3 className="text-2xl lg:text-4xl font-bold">8+</h3>
						<p>Years of experience</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.7 }}
						className="w-[50%] bg-[#252e43] p-2 lg:p-4 rounded-lg text-center">
						<h3 className="text-2xl lg:text-4xl font-bold">5+</h3>
						<p>Countries mentored</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
