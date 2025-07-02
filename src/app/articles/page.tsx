// articles/page.tsx
import Articles from "@/components/Articles";
import Button from "@/components/Button";
import TopHeader from "@/components/TopHeader";
import { FaArrowRight } from "react-icons/fa6";
import SoftPageFade from "@/components/SoftPageFade";
import HorizontalLine from "@/components/HorizontalLine";

export default function ArticlePage() {
	return (
		<SoftPageFade>
			<div className="pt-12  min-h-screen">
				<TopHeader
					title="Articles"
					page=""
				/>

				<HorizontalLine />
				<div className="px-4 sm:px-6 md:px-10 lg:px-40 bg-[#111724] flex flex-col justify-center items-center">
					<section className="pt-8 sm:pt-15 w-full max-w-7xl px-4 md:px-10 lg:px-20 flex flex-col items-center">
						<Articles />
						<div className="my-12 flex justify-center w-full">
							<Button>
								See more <FaArrowRight className="ml-2" />
							</Button>
						</div>
					</section>
				</div>
			</div>
		</SoftPageFade>
	);
}
