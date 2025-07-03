import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import Button from "./Button";

export default function ShareIdeaCard() {
	return (
		<div className="flex flex-col gap-8 w-auto items-center">
			{/* Share this post */}
			<div className="w-full flex flex-col gap-3">
				<span className="text-light text-base mb-2">SHARE THIS POST</span>
				<div className="flex flex-row gap-4">
					<button className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-[#252e43] hover:bg-[#23283a] transition-colors">
						<FiLink2 className="text-2xl text-dimlight" />
					</button>
					<button className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-[#252e43] hover:bg-[#23283a] transition-colors">
						<FaWhatsapp className="text-2xl text-dimlight" />
					</button>
					<button className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-[#252e43] hover:bg-[#23283a] transition-colors">
						<FaEnvelope className="text-2xl text-dimlight" />
					</button>
				</div>
			</div>
			{/* Idea Card */}
			<div className="w-full bg-card rounded-xl shadow-lg p-8 flex flex-col items-center gap-4">
				<h3 className="text-light text-2xl font-serif font-semibold mb-2 text-center">
					Stay in the loop
				</h3>
				<p className="text-dimlight text-center mb-4">
					Subscribe to get helpful updates, resources and more.
				</p>
				<form action="#">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="johndoe@example.com"
						className="p-2 mb-4 w-full rounded-md border border-[#252e43] focus:outline-none focus:ring-2 focus:ring-[#c6e1f5] focus:border-[#c6e1f5] transition-colors"
					/>
					<Button
						variant="outline"
						showArrow
						disabled
						className="w-full">
						Subscribe
					</Button>
				</form>
			</div>
		</div>
	);
}
