"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const RestrictedAccess = () => {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Simple validation
		if (!password.trim()) {
			setError("Please enter a password");
			return;
		}

		setIsLoading(true);
		setError("");

		try {
			// Simulate API call delay
			await new Promise((resolve) => setTimeout(resolve, 800));

			// Replace with your actual password validation
			const isValid = password === process.env.NEXT_PUBLIC_ACCESS_PASSWORD;

			if (isValid) {
				// Store access in localStorage
				localStorage.setItem("hasAccess", "true");
				router.push("/portfolio");
			} else {
				setError("Incorrect password. Please try again.");
			}
		} catch (err) {
			setError("An error occurred. Please try again later.");
			console.error("Access verification failed:", err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 md:py-12 lg:py-16 xl:py-20">
			<Link
				href="/"
				className="text-white/60 w-fit hover:underline mb-6 md:mb-8 inline-block">
				<div className="flex justify-center items-center gap-2 text-sm md:text-base">
					<FaArrowLeft /> <p>Go back</p>
				</div>
			</Link>

			<div className="bg-[#111724] text-white px-4 sm:px-6 pb-6 sm:pb-8 md:pb-10 rounded-sm w-full max-w-xl mx-auto text-center">
				<div className="h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>

				<div className="flex flex-col justify-center items-center py-6 sm:py-8 md:py-10">
					<FaLock className="text-lg md:text-xl" />
					<h1 className="text-lg sm:text-xl md:text-2xl font-bold pt-4 sm:pt-5 md:pt-6 mb-3 sm:mb-4">
						Restricted Access
					</h1>
				</div>
				<p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
					Please enter the password to view it. Reach out to me for more
					information.
				</p>

				<form
					onSubmit={handleSubmit}
					className="space-y-3 sm:space-y-4">
					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter password"
							className="w-full px-4 py-2 sm:py-3 placeholder:text-white/40 text-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbce5] text-sm sm:text-base"
							required
							disabled={isLoading}
						/>
						{error && (
							<p className="text-red-400 text-sm mt-2 text-left">{error}</p>
						)}
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className={`w-full rounded-xl px-4 py-2 sm:py-3 bg-[#252e43] hover:opacity-80 transition-all duration-300 ease-in-out text-sm sm:text-base ${
							isLoading ? "opacity-70 cursor-not-allowed" : ""
						}`}>
						{isLoading ? (
							<span className="flex items-center justify-center">
								<svg
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24">
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Verifying...
							</span>
						) : (
							"Get access"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default RestrictedAccess;
