// components/PortfolioCard.tsx
import Link from "next/link";

interface PortfolioCardProps {
	title: string;
	description: string;
	category: string;
	project: {
		id: number;
		title: string;
		description: string;
		category: string;
		link: string;
	};
}

const PortfolioCard = () => {
	return <div className=""></div>;
};

export default PortfolioCard;
