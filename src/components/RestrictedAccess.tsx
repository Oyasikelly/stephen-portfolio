import Link from "next/link";
import Button from "./Button";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const RestrictedAccess = () => {
	return (
		<div className="flex flex-col mx-auto px-40 py-20">
			<Link
				href="/portfolio"
				className="text-white/60  w-fit hover:underline mb-8 inline-block">
				<div className="flex justify-center items-center gap-2">
					<FaArrowLeft /> <p>Go back</p>
				</div>
			</Link>

			<div className="bg-[#111724] text-white px-6  pb-10 rounded-sm w-full max-w-xl mx-auto text-center">
				<div className="h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>

				<div className="flex flex-col justify-center items-center py-10">
					<FaLock />
					<h1 className="lg:text-2xl text-xl font-bold pt-6 mb-4">
						Restricted Access
					</h1>
				</div>
				<p className="text-base sm:text-lg mb-6">
					Please enter the password to view it. Reach out to me for more
					information.
				</p>

				<form className="space-y-4">
					<input
						type="password"
						placeholder="Enter password"
						className="w-full px-4 py-3 placeholder:text-white/40 text-white/40 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbce5]"
					/>
					<button className="w-full rounded-xl px-4 py-3 bg-[#252e43] hover:opacity-60 transition-all duration-300 ease-in-out">
						Get access
					</button>
				</form>
			</div>
		</div>
	);
};

export default RestrictedAccess;
