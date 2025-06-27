import { FaEnvelope, FaLinkedin, FaMedium } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Icons: { Icon: React.ElementType; label: string; href: string }[] = [
	{
		Icon: FaEnvelope,
		label: "Email",
		href: "mailto:your@email.com",
	},
	{
		Icon: FaLinkedin,
		label: "LinkedIn",
		href: "https://linkedin.com/in/yourprofile",
	},
	{
		Icon: FaMedium,
		label: "Medium",
		href: "https://medium.com/@yourprofile",
	},
	{
		Icon: FiGithub,
		label: "GitHub",
		href: "https://github.com/yourprofile",
	},
];
export default Icons;
