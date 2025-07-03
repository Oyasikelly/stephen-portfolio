"use client";

import HeadingDetails from "./HeadingDetails";

export default function YourClientComponent({ content }: { content: any }) {
	console.log(content); // This will show in the browser console
	return (
		<>
			<HeadingDetails
				time={content.time}
				date={content.date}
				categories={content.categories}
			/>
		</>
	);
}
