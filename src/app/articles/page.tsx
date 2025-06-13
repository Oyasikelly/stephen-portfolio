// articles/page.tsx
import Articles from "@/components/Articles";
import Button from "@/components/Button";
import TopHeader from "@/components/TopHeader";

export default function ArticlePage() {
	return (
		<div className="pt-12 flex flex-col justify-center items-center">
			<TopHeader
				title="Article"
				page=""
			/>
			<div className="mt-15 h-[2px] bg-gradient-to-r from-[#080d18] via-[#ffffffb4] to-[#080d18]"></div>
			<div className="px-4 sm:px-6 md:px-10 lg:px-40 bg-[#111724]"></div>
			<div className="bg-[#111724] w-full flex flex-col justify-center items-center">
				<section className="px-4 sm:px-6 md:px-10 lg:px-40 py-8 md:py-15 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 justify-between items-center">
					<Articles />
				</section>
				<div className="my-10 md:my-20">
					<Button>Show more</Button>
				</div>
			</div>
		</div>
	);
}
