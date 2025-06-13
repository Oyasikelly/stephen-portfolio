// components/Icons.tsx
import React from "react";
import Link from "next/link";

// Common styles for all icons
const iconStyles = `
  group relative
  transition-all duration-300
  rounded-full
  hover:bg-[#9bbce5]
`;

const pathStyles = `
  transition-colors duration-300
  group-hover:fill-[#0f172a]
`;

const rectStyles = `
  transition-colors duration-300
  group-hover:stroke-[#0f172a]
`;

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<Link
			href="#"
			target="_blank"
			rel="noopener noreferrer"
			className={iconStyles}>
			<svg
				width="24"
				height="23"
				viewBox="0 0 24 23"
				fill="none"
				className="group-hover:scale-110 transition-transform"
				{...props}>
				<rect
					x="0.77"
					y="0.42"
					width="22.194"
					height="22.194"
					rx="11.097"
					stroke="#9BBCE5"
					strokeWidth="0.653"
					className={rectStyles}
				/>
				<path
					d="M9.337 15.295H7.44V9.196H9.337v6.099ZM8.379 8.38a1.1 1.1 0 1 1 0-2.203 1.1 1.1 0 0 1 0 2.203ZM16.416 15.295h-1.877v-2.958c0-.714-.02-1.612-.999-1.612-1.02 0-1.163.755-1.163 1.55v3.02h-1.897V9.196h1.816v.836h.02c.265-.47.877-.98 1.795-.98 1.917 0 2.285 1.265 2.285 2.897v3.346h-.02Z"
					fill="#9BBCE5"
					className={pathStyles}
				/>
			</svg>
		</Link>
	);
}

export function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<Link
			href="#"
			target="_blank"
			rel="noopener noreferrer"
			className={iconStyles}>
			<svg
				width="24"
				height="23"
				viewBox="0 0 24 23"
				fill="none"
				className="group-hover:scale-110 transition-transform"
				{...props}>
				<rect
					x="0.77"
					y="0.42"
					width="22.194"
					height="22.194"
					rx="11.097"
					stroke="#9BBCE5"
					strokeWidth="0.653"
					className={rectStyles}
				/>
				<path
					d="M9.36 15.295c-.03.07-.143.085-.243.04-.1-.045-.168-.143-.138-.213.03-.07.142-.085.242-.04.1.044.168.142.138.213Zm-.45-.26c-.07.062-.2.032-.29-.067-.093-.1-.11-.23-.04-.292.07-.062.2-.032.29.068.093.1.11.23.04.292Zm1.1-1.12c-.07.045-.16.022-.22-.056-.07-.08-.08-.186-.01-.231.07-.045.16-.022.22.056.07.08.08.186.01.231Zm-.96-1.23c-.06.07-.18.05-.27-.044-.09-.094-.11-.216-.05-.286.06-.07.18-.05.27.044.09.094.11.216.05.286Zm1.3.72c-.03.095-.165.14-.3.1-.136-.04-.225-.16-.196-.255.03-.095.165-.14.3-.1.136.04.225.16.196.255Zm-.54-.34c.126.115.3.095.39-.044.09-.14.07-.325-.056-.44-.126-.115-.3-.095-.39.044-.09.14-.07.325.056.44Zm.48.55c.15.1.35.03.44-.16.09-.19.02-.405-.13-.505-.15-.1-.35-.03-.44.16-.09.19-.02.405.13.505Z"
					fill="#9BBCE5"
					className={pathStyles}
				/>
				<path
					d="M12.083 9.196c-1.214 0-2.204.99-2.204 2.203 0 .972.632 1.797 1.51 2.088-.11.024-.214.034-.31.034-.1 0-.19-.01-.27-.03-.01-.02-.02-.04-.02-.06v-1.56H9.97c-.09 0-.16-.08-.16-.17 0-.09.07-.16.16-.16h.59v-.55c0-.53.33-.98.8-1.16-.07-.16-.11-.34-.11-.53 0-.73.59-1.32 1.32-1.32.73 0 1.32.59 1.32 1.32 0 .19-.04.37-.11.53.47.18.8.63.8 1.16v.55h.59c.09 0 .16.07.16.16 0 .09-.07.17-.16.17h-.59v1.56c0 .02-.01.04-.02.06-.08.02-.17.03-.27.03-.1 0-.2-.01-.31-.03.878-.29 1.51-1.116 1.51-2.088 0-1.213-.99-2.203-2.204-2.203Z"
					fill="#9BBCE5"
					className={pathStyles}
				/>
			</svg>
		</Link>
	);
}

export function MediumIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<Link
			href="#"
			target="_blank"
			rel="noopener noreferrer"
			className={iconStyles}>
			<svg
				width="24"
				height="23"
				viewBox="0 0 24 23"
				fill="none"
				className="group-hover:scale-110 transition-transform"
				{...props}>
				<rect
					x="0.77"
					y="0.42"
					width="22.194"
					height="22.194"
					rx="11.097"
					stroke="#9BBCE5"
					strokeWidth="0.653"
					className={rectStyles}
				/>
				<path
					d="M12.92 9.196c1.346 0 2.438 1.092 2.438 2.438 0 1.347-1.092 2.439-2.438 2.439-1.347 0-2.439-1.092-2.439-2.439 0-1.346 1.092-2.438 2.439-2.438Zm4.343.38c.306 0 .555.249.555.555v4.015a.555.555 0 0 1-.555.555.555.555 0 0 1-.555-.555V10.13c0-.306.249-.555.555-.555Zm2.97.76c.153 0 .277.124.277.277v2.495a.277.277 0 0 1-.277.277.277.277 0 0 1-.277-.277v-2.495c0-.153.124-.277.277-.277Z"
					fill="#9BBCE5"
					className={pathStyles}
				/>
				<path
					d="M17.6 9.576c.306 0 .555.249.555.555v4.015a.555.555 0 0 1-.555.555.555.555 0 0 1-.555-.555V10.13c0-.306.249-.555.555-.555Zm-8.77.76c1.346 0 2.438 1.092 2.438 2.438 0 1.347-1.092 2.439-2.438 2.439-1.347 0-2.439-1.092-2.439-2.439 0-1.346 1.092-2.438 2.439-2.438Zm4.343.38c.306 0 .555.249.555.555v4.015a.555.555 0 0 1-.555.555.555.555 0 0 1-.555-.555V10.13c0-.306.249-.555.555-.555Z"
					fill="#9BBCE5"
					className={pathStyles}
				/>
			</svg>
		</Link>
	);
}

export function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<Link
			href="#"
			target="_blank"
			rel="noopener noreferrer"
			className={iconStyles}>
			<svg
				width="24"
				height="23"
				viewBox="0 0 24 23"
				fill="none"
				className="group-hover:scale-110 transition-transform"
				{...props}>
				<rect
					x="0.77"
					y="0.42"
					width="22.194"
					height="22.194"
					rx="11.097"
					stroke="#9BBCE5"
					strokeWidth="0.653"
					className={rectStyles}
				/>
				<path
					d="M17.2 7.996H7.2c-.99 0-1.8.81-1.8 1.8v5.4c0 .99.81 1.8 1.8 1.8h10c.99 0 1.8-.81 1.8-1.8v-5.4c0-.99-.81-1.8-1.8-1.8Zm0 1.8v.9l-5 2.7-5-2.7v-.9h10Zm0 6.3H7.2v-5.4l5 2.7 5-2.7v5.4Z"
					fill="#9BBCE5"
					className={pathStyles}
				/>
			</svg>
		</Link>
	);
}
