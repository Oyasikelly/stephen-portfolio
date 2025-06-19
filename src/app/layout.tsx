import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "../components/Footer";
import FloatingCursor from "../components/FloatingCursor";

import ConditionalHeader from "@/components/ConditionalHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Stephen Okuanade - Portfolio",
	description: "Frontend Heavy Fullstack Software Engineer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const pathName = usePathname();

	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<FloatingCursor />
				<ConditionalHeader />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
